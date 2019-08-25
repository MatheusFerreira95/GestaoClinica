using GestaoConsultorioMedico.Extensions.Security;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Extensions
{
    public static class ServiceExtensions
    {
        /**
         * Método que permite requisições da aplicaçao cliente (executado via servidor do Angular na porta 4200).
         * **/
        public static void ConfigurarCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.WithOrigins("http://localhost:4200")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });
        }

        /**
         * A solução criada para autenticação é fake, pois considera um usuário admin:admin estático. 
         * A configuração de uma solução para autenticar um usuário em um bano de dados deve mapear a classe "UsuarioFake"
         * e adaptadar o médodo "UsuarioExiste". Além disso, é importante ressaltar que a solução em JWT, 
         * incluindo a assinatura criptografada foi inspirada na proposta de 
         * Renato Groffe (https://github.com/renatogroffe/ASPNETCore2_JWT)
         * **/
        public static void ConfigurarAutenticacao(this IServiceCollection services)
        {
            // Instanciando configurações de segurança (token e criptografia).
            ConfiguracoesDeSegurancaSingleton configuracoesDeSeguranca = ConfiguracoesDeSegurancaSingleton.getInstance();
            services.AddSingleton(configuracoesDeSeguranca);

            // Configurando autenticação JWT com Bearer.
            services.AddAuthentication(authOptions =>
            {
                authOptions.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                authOptions.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(bearerOptions =>
            {
                var paramsValidation = bearerOptions.TokenValidationParameters;
                paramsValidation.IssuerSigningKey = configuracoesDeSeguranca.SecurityKey;
                paramsValidation.ValidAudience = configuracoesDeSeguranca.TokenAudience;
                paramsValidation.ValidIssuer = configuracoesDeSeguranca.TokenIssuer;
                paramsValidation.ValidateIssuerSigningKey = true;
                paramsValidation.ValidateLifetime = true;
            });

            // Ativando verificação de token em requisições.
            services.AddAuthorization(autorizacao =>
            {
                autorizacao.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
                    .RequireAuthenticatedUser().Build());
            });
        }

    }
}

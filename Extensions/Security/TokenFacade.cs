using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Extensions.Security
{
    public static class TokenFacade
    {
        public static String GerarToken(ConfiguracoesDeSegurancaSingleton configuracoesDeSeguranca, UsuarioFake usuario)
        {
            ClaimsIdentity claimsIdentity = new ClaimsIdentity(
                      new GenericIdentity("Id", usuario.Id + ""),
                      new[] {
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
                        new Claim(JwtRegisteredClaimNames.UniqueName, usuario.Id+"")
                      }
                  );

            DateTime dataCriacao = DateTime.Now;
            DateTime dataExpiracao = dataCriacao +
                TimeSpan.FromSeconds(configuracoesDeSeguranca.TokenSeconds);

            var handler = new JwtSecurityTokenHandler();
            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = configuracoesDeSeguranca.TokenIssuer,
                Audience = configuracoesDeSeguranca.TokenAudience,
                SigningCredentials = configuracoesDeSeguranca.SigningCredentials,
                Subject = claimsIdentity,
                NotBefore = dataCriacao,
                Expires = dataExpiracao
            });
            var tokenOK = handler.WriteToken(securityToken);

            return tokenOK;
        }
    }
}

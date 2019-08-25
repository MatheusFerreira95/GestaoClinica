using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Extensions.Security
{
    public class ConfiguracoesDeSegurancaSingleton
    {
        public string TokenAudience { get; }
        public string TokenIssuer { get; }
        public int TokenSeconds { get; }
        public SecurityKey SecurityKey { get; }
        public SigningCredentials SigningCredentials { get; }

        private static ConfiguracoesDeSegurancaSingleton configuracoesDeSeguranca;

        private ConfiguracoesDeSegurancaSingleton()
        {
            TokenAudience = "localhost";
            TokenIssuer = "localhost";
            TokenSeconds = 1200;

            using (var provider = new RSACryptoServiceProvider(2048))
            {
                SecurityKey = new RsaSecurityKey(provider.ExportParameters(true));
            }
            SigningCredentials = new SigningCredentials(
                SecurityKey, SecurityAlgorithms.RsaSha256Signature);
        }
        public static ConfiguracoesDeSegurancaSingleton getInstance()
        {
            //cria o singleton apenas uma vez
            if (configuracoesDeSeguranca == null)
            {
                configuracoesDeSeguranca = new ConfiguracoesDeSegurancaSingleton();
            }
            return configuracoesDeSeguranca;
        }

    }
}

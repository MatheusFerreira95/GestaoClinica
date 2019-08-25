using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Extensions.Security
{
    public class Assinatura
    {
        public SecurityKey SecurityKey { get; }
        public SigningCredentials SigningCredentials { get; }

        public Assinatura()
        {
            using (var provider = new RSACryptoServiceProvider(2048))
            {
                SecurityKey = new RsaSecurityKey(provider.ExportParameters(true));
            }

            SigningCredentials = new SigningCredentials(
                SecurityKey, SecurityAlgorithms.RsaSha256Signature);
        }
    }
}

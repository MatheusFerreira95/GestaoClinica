using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Extensions.Security
{
    public class Token
    {
        public string Audience { get; set; }
        public string Issuer { get; set; }
        public int Seconds { get; set; }

        public Token()
        {
            this.Audience = "localhost";
            this.Issuer = "localhost";
            this.Seconds = 1200;
        }
    }
}


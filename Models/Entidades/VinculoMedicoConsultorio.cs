using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Models.Entidades
{
    public class VinculoMedicoConsultorio
    {
        public int MedicoId { get; set; }
        public Medico Medico { get; set; }
        public int ConsultorioId { get; set; }
        public Consultorio Consultorio { get; set; }
    }
}

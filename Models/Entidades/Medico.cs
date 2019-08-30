using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Models.Entidades
{
    public class Medico
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(10)]
        public string CRM { get; set; }
        [MaxLength(100)]
        public string Nome { get; set; }
        [MaxLength(20)]
        public string Telefone { get; set; }
        public float ValorConsulta { get; set; }
        public ICollection <VinculoMedicoConsultorio> Vinculos { get; set; }

        [NotMapped]
        public string[] acoes = { "editar", "remover" };
    }
}

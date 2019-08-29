using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Models.Entidades
{
    public class Consultorio
    {
        public int Id { get; set; }
        [MaxLength(100)]
        public string Nome { get; set; }
        [MaxLength(200)]
        [Required]
        public string Endereco { get; set; }
        [MaxLength(20)]
        [Required]
        public string Telefone { get; set; }
        public ICollection<VinculoMedicoConsultorio> Vinculos { get; set; }
    }
}

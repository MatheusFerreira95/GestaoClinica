using GestaoConsultorioMedico.Models.Entidades;
using Microsoft.EntityFrameworkCore;

namespace GestaoConsultorioMedico.Models.ContextoBD
{
    public class ContextoBD : DbContext
    {

        public ContextoBD(DbContextOptions<ContextoBD> option) : base(option)
        {
            Database.EnsureCreated();
        }


        public DbSet<Medico> Medico { get; set; }
        public DbSet<Consultorio> Consultorio { get; set; }
    }
}

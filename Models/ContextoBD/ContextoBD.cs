using GestaoConsultorioMedico.Models.Entidades;
using Microsoft.EntityFrameworkCore;

namespace GestaoConsultorioMedico.Models.ContextoBD
{
    public class ContextoBD : DbContext
    {
        public DbSet<Medico> Medico { get; set; }
        public DbSet<Consultorio> Consultorio { get; set; }
        public DbSet<VinculoMedicoConsultorio> VinculoMedicoConsultorio { get; set; }

        public ContextoBD(DbContextOptions<ContextoBD> option) : base(option)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VinculoMedicoConsultorio>().HasKey(sc => new { sc.MedicoId, sc.ConsultorioId});

        }

    }
}

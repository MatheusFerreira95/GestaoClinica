using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Extensions.Security
{
    public class UsuarioFake
    {
        private string Nome { get; set; }
        private String Senha { get; set; }
        private int Id { get; set; }

        public UsuarioFake(string nome, string senha, int id)
        {
            this.Nome = nome;
            this.Senha = senha;
            this.Id = id;
        }

        public static UsuarioFake UsuarioExiste(string nome, string senha)
        {
            UsuarioFake usuarioFake = new UsuarioFake("admin", "admin", 1);

            if (nome.Equals(usuarioFake.Nome) && senha.Equals(usuarioFake.Senha))
            {

                return usuarioFake;
            }

            return null;
        }
    }
}

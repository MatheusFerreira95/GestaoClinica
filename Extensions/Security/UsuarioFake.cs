using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Extensions.Security
{
    public class UsuarioFake
    {
        public string Nome { get; set; }
        public String Senha { get; set; }
        public int Id { get; set; }

        public UsuarioFake(string nome, string senha, int id)
        {
            this.Nome = nome;
            this.Senha = senha;
            this.Id = id;
        }

        public static UsuarioFake UsuarioExiste(UsuarioFake usuario)
        {
            UsuarioFake usuarioFake = new UsuarioFake("admin", "admin", 1);

            if (usuario.Nome.Equals(usuarioFake.Nome) && usuario.Senha.Equals(usuarioFake.Senha))
            {

                return usuarioFake;
            }

            return null;
        }
    }
}

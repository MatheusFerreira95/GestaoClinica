using GestaoConsultorioMedico.Extensions.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        [HttpPost]
        [AllowAnonymous]
        public String Login(
            [FromBody]UsuarioFake usuario,
            [FromServices]ConfiguracoesDeSegurancaSingleton configuracoesDeSeguranca)
        {
            UsuarioFake usuarioFake;

            if (usuario == null ||
                String.IsNullOrWhiteSpace(usuario.Nome) ||
                String.IsNullOrWhiteSpace(usuario.Senha))
            {
                Response.StatusCode = 400;
                return "Requisição inválida.";
            }

            usuarioFake = UsuarioFake.UsuarioExiste(usuario);

            if (usuarioFake == null)
            {
                Response.StatusCode = 401;
                return "Usuário não autenticado.";
            }

            // Fachada que implementa a geração de tokens com base nas configurações de segurança e no usuário logado.
            return TokenFacade.GerarToken(configuracoesDeSeguranca, usuario);
        }
    }
}

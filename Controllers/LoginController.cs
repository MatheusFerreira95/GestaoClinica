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
    public class LoginController : BaseController
    {
        [HttpPost]
        [AllowAnonymous]
        public Object Login(
            [FromBody]UsuarioFake usuario,
            [FromServices]ConfiguracoesDeSegurancaSingleton configuracoesDeSeguranca)
        {
            UsuarioFake usuarioFake;

            if (usuario == null ||
                String.IsNullOrWhiteSpace(usuario.Nome) ||
                String.IsNullOrWhiteSpace(usuario.Senha))
            {
                return enviarBadRequest();
            }

            usuarioFake = UsuarioFake.UsuarioExiste(usuario);

            if (usuarioFake == null)
            {
                return enviarUnauthorized();
            }

            // Fachada que implementa a geração de tokens com base nas configurações de segurança e no usuário logado.
            return new
            {
                token = TokenFacade.GerarToken(configuracoesDeSeguranca, usuario)
            };
        }
    }
}

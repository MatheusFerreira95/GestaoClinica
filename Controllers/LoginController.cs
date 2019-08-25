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
            [FromServices]Assinatura assinatura,
            [FromServices]Token token)
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

            // Fachada criar token
            ClaimsIdentity claimsIdentity = new ClaimsIdentity(
                    new GenericIdentity("Id", "Id"),
                    new[] {
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
                        new Claim(JwtRegisteredClaimNames.UniqueName, "Id")
                    }
                );

            DateTime dataCriacao = DateTime.Now;
            DateTime dataExpiracao = dataCriacao +
                TimeSpan.FromSeconds(token.Seconds);

            var handler = new JwtSecurityTokenHandler();
            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = token.Issuer,
                Audience = token.Audience,
                SigningCredentials = assinatura.SigningCredentials,
                Subject = claimsIdentity,
                NotBefore = dataCriacao,
                Expires = dataExpiracao
            });
            var tokenOK = handler.WriteToken(securityToken);

            return tokenOK;
        }
    }
}

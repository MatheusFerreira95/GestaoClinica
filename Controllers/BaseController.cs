using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Controllers
{
    public class BaseController : Controller
    {

        public object enviarBadRequest()
        {
            Response.StatusCode = 400;
            return new
            {
                mensagem = "Requisição inválida."
            };
        }


        public object enviarSuccess()
        {
            Response.StatusCode = 200;
            return new
            {
                mensagem = "Operação realizada com sucesso."
            };
        }

        public object enviarUnauthorized()
        {
            Response.StatusCode = 401;
            return new
            {
                mensagem = "Usuário não autenticado."
            };
        }
    }
}

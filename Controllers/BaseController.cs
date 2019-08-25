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
            return "Requisição inválida.";
        }

        public object enviarUnauthorized()
        {
            Response.StatusCode = 401;
            return "Usuário não autenticado.";
        }
    }
}

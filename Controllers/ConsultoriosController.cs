using GestaoConsultorioMedico.Models.Entidades;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoConsultorioMedico.Controllers
{
    [Route("api/[controller]")]
    public class ConsultoriosController : BaseController
    {
        [HttpPost]
        [Authorize("Bearer")]
        public Object Cadastrar([FromBody]Consultorio consultorio)
        {

            if (consultorio == null || consultorio.Id != null)
            {
                return enviarBadRequest();
            }

            return new
            {
                nome = "Cadastrar c"
            };
        }

        [HttpPost]
        [Authorize("Bearer")]
        public Object editar([FromBody]Consultorio consultorio)
        {

            if (consultorio == null || consultorio.Id == null)
            {
                return enviarBadRequest();
            }

            return new
            {
                nome = "Editar c"
            };
        }

        [HttpGet("[action]")]
        [Authorize("Bearer")]
        public Object Listar()
        {

            return new
            {
                consultorios = new List<String>()
            };
        }

        [HttpGet("[action]")]
        [Authorize("Bearer")]
        public Object Exibir()
        {

            return new
            {
                nome = "exibir c"
            };
        }
    
}
}

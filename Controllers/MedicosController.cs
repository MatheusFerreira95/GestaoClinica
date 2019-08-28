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
    public class MedicosController : BaseController
    {
        [HttpPost]
        [Authorize("Bearer")]
        public Object Cadastrar([FromBody]Medico medico)
        {

            if (medico == null || medico.Id != null)
            {
                return enviarBadRequest();
            }

            return new
            {
                nome = "Cadastrar"
            };
        }

        [HttpPost]
        [Authorize("Bearer")]
        public Object editar([FromBody]Medico medico)
        {

            if (medico == null || medico.Id == null)
            {
                return enviarBadRequest();
            }

            return new
            {
                nome = "Editar"
            };
        }

        [HttpGet("[action]")]
        [Authorize("Bearer")]
        public Object Listar()
        {

            var medico = new
            {
                crm = "1234567890",
                nome = "Consultóri oX",
                valorConsulta = "R$ 300,00",
                telefone = "(37) 9 1234-1234",
                consultorios = "Consultorio x",
                acoes = new List<string>()
            };
            medico.acoes.Add("editar"); 
            medico.acoes.Add("remover");

            var medicos = new List<Object>();

            medicos.Add(medico);


            return medicos;
        }

        [HttpGet("[action]")]
        [Authorize("Bearer")]
        public Object Exibir()
        {

            return new
            {
                nome = "Listar"
            };
        }
    }
}

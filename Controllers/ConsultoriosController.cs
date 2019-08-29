using GestaoConsultorioMedico.Models.ContextoBD;
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

        private readonly ContextoBD _contextoBD;

        public ConsultoriosController(ContextoBD contextoBD)
        {
            _contextoBD = contextoBD;
        }

        [HttpPost("[action]")]
        [Authorize("Bearer")]
        public Object Cadastrar([FromBody]Consultorio consultorio)
        {

            if (consultorio == null)
            {
                return enviarBadRequest();
            }

            if (ModelState.IsValid)
            {
                //falta adicionar verificações na modelagem de consultório para evitar que médicos com nomes iguais sejam cadastrados.
                _contextoBD.Consultorio.Add(consultorio);
                _contextoBD.SaveChanges();
            }

            return enviarSuccess();
        }

        [HttpPost("[action]")]
        [Authorize("Bearer")]
        public Object editar([FromBody]Consultorio consultorio)
        {

            if (consultorio == null)
            {
                return enviarBadRequest();
            }

            if (ModelState.IsValid)
            {
                //falta adicionar verificação para que a lista de vinculos não seja alterada ao efetuar esta ação
                _contextoBD.Consultorio.Update(consultorio);
                _contextoBD.SaveChanges();
            }

            return enviarSuccess();
        }

        [HttpGet("[action]")]
        [Authorize("Bearer")]
        public Object Listar()
        {
            return _contextoBD.Consultorio.ToList();
        }

    }
}

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
    public class MedicosController : BaseController

    {
        private readonly ContextoBD _contextoBD;

        public MedicosController(ContextoBD contextoBD)
        {
            _contextoBD = contextoBD;
        }

        [HttpPost("[action]")]
        [Authorize("Bearer")]
        public Object Cadastrar([FromBody]Medico medico)
        {

            if (medico == null)
            {
                return enviarBadRequest();
            }

            if (ModelState.IsValid)
            {
                //falta adicionar verificações na modelagem de médico para evitar que médicos com CRM's iguais sejam cadastrados.
                _contextoBD.Medico.Add(medico);
                _contextoBD.SaveChanges();
            }

            return enviarSuccess();
        }

        [HttpPost("[action]")]
        [Authorize("Bearer")]
        public Object editar([FromBody]Medico medico)
        {

            if (medico == null)
            {
                return enviarBadRequest();
            }

            if (ModelState.IsValid)
            {
                //falta adicionar verificação para que a lista de vinculos não seja alterada ao efetuar esta ação
                _contextoBD.Medico.Update(medico);
                _contextoBD.SaveChanges();
            }

            return enviarSuccess();
        }

        [HttpGet("[action]")]
         [Authorize("Bearer")]
        public Object Listar()
        {
            return _contextoBD.Medico.ToList();
        }
    }
}

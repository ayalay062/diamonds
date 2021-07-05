using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;

namespace nDiamonds.Controllers
{
    [RoutePrefix("api/professionalDiamonds")]
    public class professionalDiamondsController : ApiController
    {
        // GET: api/proffesionalDiamonds
        [Route("getProfessionalDiamonds")]
        public IHttpActionResult getProfessionalDiamonds(string entringName,string password)
        {
            return Ok(UI.professionalesUI.getProfessionalDiamonds(entringName, password));
        }

        // GET: api/proffesionalDiamonds/5
        public string Get(int id)
        {
            return "value";
        }

        [Route("getProfessionalesOfStatus/{statusName}")]
        public IHttpActionResult getProfessionalesOfStatus(string statusName)

        {
            return Ok(UI.professionalesUI.getProfessionalsOfStatus(statusName));
        }
        // POST: api/proffesionalDiamonds
        [Route("updateFinishStatus/{endCT}")]
        [HttpPost]
        public bool updateFinishStatus(double endCT,[FromBody]professionalDiamonds pd)
        {
            int a = UI.professionalesUI.updateFinishStatus(endCT,pd);
            if (a == 1)
                return true;
            else
                return false;
        }

        // PUT: api/proffesionalDiamonds/5


        // DELETE: api/proffesionalDiamonds/5
        public void Delete(int id)
        {
        }
    }
}

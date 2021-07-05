using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UI;

namespace Diamonds.Controllers
{
    [RoutePrefix("api/professionales")]
    public class professionalesController : ApiController
    {
        // GET: api/professionales
        [Route("getProfessionals")]
        public IHttpActionResult getProfessionals()
        {
            return Ok();
        }

        // GET: api/professionales/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/professionales
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/professionales/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/professionales/5
        public void Delete(int id)
        {
        }
    }
}

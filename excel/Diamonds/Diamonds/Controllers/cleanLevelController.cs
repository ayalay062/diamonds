using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UI;

namespace Diamonds.Controllers
{
    [RoutePrefix("api/cleanLevel")]
    public class cleanLevelController : ApiController
    {
        // GET: api/cleanLevel
        [Route("getCleanLevel")]
        public IHttpActionResult getCleanLevel()
        {
            return  Ok();
        }

        // GET: api/cleanLevel/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/cleanLevel
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/cleanLevel/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/cleanLevel/5
        public void Delete(int id)
        {
        }
    }
}

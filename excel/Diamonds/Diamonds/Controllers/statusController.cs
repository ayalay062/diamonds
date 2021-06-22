using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Diamonds.Controllers
{
    [RoutePrefix("api/status")]
    public class statusController : ApiController
    {
        // GET: api/status
        [Route("getStatus")]
        public IHttpActionResult getStatus()
        {
            return Ok();
        }

        // GET: api/status/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/status
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/status/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/status/5
        public void Delete(int id)
        {
        }
    }
}

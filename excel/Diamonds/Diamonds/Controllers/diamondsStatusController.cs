using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UI;

namespace Diamonds.Controllers
{
    [RoutePrefix("api/diamondsStatus")]
    public class diamondsStatusController : ApiController
    {
        // GET: api/diamondsStatus
        [Route("getDiamondsStatus")]
        public IHttpActionResult getDiamondsStatus()
        {
            return Ok();
        }

        // GET: api/diamondsStatus/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/diamondsStatus
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/diamondsStatus/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/diamondsStatus/5
        public void Delete(int id)
        {
        }
    }
}

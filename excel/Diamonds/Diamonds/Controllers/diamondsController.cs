using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UI;

namespace Diamonds.Controllers
{
    [RoutePrefix("api/diamonds")]
    public class diamondsController : ApiController
    {
        // GET: api/diamonds
        [Route("getdiamonds")]
        public IHttpActionResult getdiamonds()
        {
            return Ok();
        }

        // GET: api/diamonds/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/diamonds
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/diamonds/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/diamonds/5
        public void Delete(int id)
        {
        }
    }
}

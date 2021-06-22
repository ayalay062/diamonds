using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UI;

namespace Diamonds.Controllers
{
    [RoutePrefix("api/colors")]
    public class colorsController : ApiController
    {
        // GET: api/colors
        [Route("getColors")]
        public IHttpActionResult getColors()
        {
            return Ok();
        }

        // GET: api/colors/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/colors
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/colors/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/colors/5
        public void Delete(int id)
        {
        }
    }
}

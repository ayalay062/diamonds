using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UI;
namespace Diamonds.Controllers
{
    [RoutePrefix("api/shapes")]
    public class shapesController : ApiController
    {
        // GET: api/shapes
        [Route("getShapes")]
        public IHttpActionResult getShapes()
        {
            return Ok();
        }

        // GET: api/shapes/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/shapes
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/shapes/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/shapes/5
        public void Delete(int id)
        {
        }
    }
}

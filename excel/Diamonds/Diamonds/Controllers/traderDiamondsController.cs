using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UI;
namespace Diamonds.Controllers
{
    [RoutePrefix("api/traderDiamonds")]
    public class traderDiamondsController : ApiController
    {
        [Route("getNameById")]
        // GET: api/traderDiamonds
        public IHttpActionResult getNameById()
        {
            return Ok();
        }

        // GET: api/traderDiamonds/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/traderDiamonds
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/traderDiamonds/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/traderDiamonds/5
        public void Delete(int id)
        {
        }
    }
}

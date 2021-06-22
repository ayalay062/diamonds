using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UI;
namespace Diamonds.Controllers
{
    [RoutePrefix("api/priceList")]
    public class priceListController : ApiController
    {
        // GET: api/priceList
        [Route("getPriceList")]
        public IHttpActionResult getPriceList()
        {
            return Ok();
        }

        // GET: api/priceList/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/priceList
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/priceList/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/priceList/5
        public void Delete(int id)
        {
        }
    }
}

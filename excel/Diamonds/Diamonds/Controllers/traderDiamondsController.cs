using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
using UI;

namespace nDiamonds.Controllers
{
    [RoutePrefix("api/traderDiamonds")]
    public class traderDiamondsController : ApiController
    {
      [Route("getDiamondsOfTrader/{name}/{password}")]
      [HttpGet]
    public IHttpActionResult getDiamondsOfTrader(string name,string password)
        {
            return Ok(UI.traderDiamondsUI.getListDiamondsOfTrader(name,password));
        }

        [Route ("getCleanList")]
        [HttpGet]
        public IHttpActionResult getCleanList()
        {
            return Ok(UI.cleanLevelUI.getCleanList());
        }


        // GET: api/traderDiamonds/5
        [Route("getShapeList")]
        [HttpGet]
        public IHttpActionResult getShapeList()
        {
            return Ok(UI.shapesUI.getShapeList());
        }

        [Route("getColorList")]
        [HttpGet]
        public IHttpActionResult getColorList()
        {
            return Ok(UI.colorsUI.getColorList());
        }
        // POST: api/traderDiamonds
        [Route("updatDiamondToTheNextStatus")]
        [HttpPost]
        public void updatDiamondToTheNextStatus([FromBody]string value)
        {
            UI.diamondsStatusUI.updatDiamondToTheNextStatus();
        }
        // POST: api/traderDiamonds
        


        // POST: api/traderDiamonds
        [Route("addNewDiamond/{name}/{password}/{price}")]
        [HttpPost]
        public IHttpActionResult addNewDiamond(string name,string password,int price,[FromBody] DiamondsDTO d)
        {
            return Ok(UI.traderDiamondsUI.addNewDiamond(name, password, price, d));
        }

        // PUT: api/traderDiamonds/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/traderDiamonds/5
        [Route("removeDiamond/{diamondId}/{name}/{password}")]
        [HttpDelete]
        public IHttpActionResult removeDiamond(int diamondId,string name,string password)
        {
            return Ok(UI.DiamondsUI.removeDiamond(diamondId, name, password));

        }
    }
}

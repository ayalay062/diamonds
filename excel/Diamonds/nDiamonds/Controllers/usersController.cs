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
    [RoutePrefix("api/users")]
    public class usersController : ApiController
    {
        //// GET: api/users
        //DiampndsDBEntities d = new DiampndsDBEntities();
        //[Route("Get")]
        //public IHttpActionResult Get()
        //{
        //    return Ok(StatusDTO.convertToListDTO(d.status.ToList()));
        //}


        [Route("ifExsistEnterNameAndPassword/{enterName}/{password}")]
        [HttpGet]
        public IHttpActionResult ifExsistEnterNameAndPassword(string enterName, string password)
        {
            return Ok(UI.usersUI.exsistNameAndPassword(enterName, password));
        }

        [HttpGet]
        [Route("singularPassword/{password}")]
        public IHttpActionResult singularPassword(string password)
        {
            return Ok(UI.usersUI.singularPassword(password));
        }
        [Route("readExcel")]
        [HttpGet]
        public IHttpActionResult readExcel()
        {
            readFromExcel.readFromExcel1();
            return Ok();
        }
        // GET: api/users/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/users
        public void Post([FromBody]string value)
        {

        }

        [Route("addNewTrader")]
        [HttpPost]
        public bool addNewTrader([FromBody]UsersDTO u)
        {
           int a= UI.usersUI.addTrader(u);
            if (a == 1)
                return true;
            else
                return false;
        }

       
        [Route("addNewProfessional/{status}/{price}")]
        [HttpPost]
        public bool addNewProfessional(string status, float price, [FromBody]UsersDTO u)
        {
           int a= UI.usersUI.addProfessional(status, price, u);
            if (a == 1)
                return true;
            else
                return false;

            
        }

        // PUT: api/users/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/users/5
        public void Delete(int id)
        {
        }
    }
}

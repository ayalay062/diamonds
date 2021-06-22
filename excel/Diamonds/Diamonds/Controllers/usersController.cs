using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UI;
using DTO;

namespace Diamonds.Controllers
{
    [RoutePrefix("api/users")]
    public class usersController : ApiController
    {
        // GET: api/users
        [Route("getUsers")]
        public IHttpActionResult getUsers()
        {
            return Ok();
        }

        // GET: api/users/5
        [Route("ifExsistEnterNameAndPassword/{enterName}/{password}")]
        public IHttpActionResult ifExsistEnterNameAndPassword(string enterName,string password)
        {
            return Ok(UI.usersUI.exsistNameAndPassword(enterName,password));
        }

        // POST: api/users
        [Route ("addNewProfessional/{}")]
        public void addNewProfessional([FromBody]UsersDTO u,[FromBody]ProfessionalesDTO p)
        {
            UI.usersUI.addProfessional(u,p);
        }

        [Route ("addNewTrader")]
        public void addNewTrader([FromBody]UsersDTO u)
        {
          UI.usersUI.addTrader(u);
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

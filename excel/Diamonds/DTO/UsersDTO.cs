using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;

namespace DTO
{
    public class UsersDTO
    {
        public int UserId { get; set; }
        public string EntringName { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Mail { get; set; }
        public string Mobile { get; set; }

        public static UsersDTO convertToDTO(users u)
        {
            return new UsersDTO()
            {
                UserId=u.userId,
                EntringName=u.entringName,
                Password=u.password,
                FirstName=u.firstName,
                LastName=u.lastName,
                Mail=u.mail,
                Mobile=u.mobile
            };
        }
        public static List<UsersDTO> convertToListDTO(List<users> lu)
        {
            var v = from x in lu
                    select new UsersDTO()
                    {
                        UserId = x.userId,
                        EntringName = x.entringName,
                        Password = x.password,
                        FirstName = x.firstName,
                        LastName = x.lastName,
                        Mail = x.mail,
                        Mobile = x.mobile
                    };
              return v.ToList();    
        }
        public static users convertToDB(UsersDTO u)
        {
            return new users()
            {
                userId = u.UserId,
                entringName = u.EntringName,
                password = u.Password,
                firstName = u.FirstName,
                lastName = u.LastName,
                mail = u.Mail,
                mobile = u.Mobile
            };
        }
    }
}

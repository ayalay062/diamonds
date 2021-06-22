using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;
using DTO;

namespace UI
{
    public class usersUI
    {
        static DiampndsDBEntities db = new DiampndsDBEntities();

        public static string exsistNameAndPassword(string enterName,string password)
        {
            string type;
            users u = db.users.Where(x => (x.password == password && x.entringName == enterName)).FirstOrDefault();
            if (u != null)
              {
                if (db.professionales.Where(x => (x.userId == u.userId)).FirstOrDefault() != null)
                    type = "professional";
                else
                    type = "trader";
                return type;
            }
            return null;
        }
        public static Boolean singularPassword(string password)
        {
            if (db.users.Where(x => x.password == password).FirstOrDefault() != null)
                return false;
            return true;
        }
        public static int addTrader(UsersDTO u)
        {
           users newU= DTO.UsersDTO.convertToDB(u);
            db.users.Add(newU);
            int a=db.SaveChanges();
            return a;
        }
        public static int getIdByNameAndPassword(string entringName,string password)
        {
            //using (DiampndsDBEntities db1 = new DiampndsDBEntities()) {
                int userId = db.users.Where(x => x.entringName == entringName && x.password == password)
                .Select(y => y.userId).FirstOrDefault();
            return userId; /*}*/

        }
        public static int addProfessional(string statusName,float price, UsersDTO u)
        {
            users newU = DTO.UsersDTO.convertToDB(u);
            db.users.Add(newU);
            db.SaveChanges();

            int statusId = statusUI.getIdByName(statusName);
            int userId = getIdByNameAndPassword(u.EntringName, u.Password);
            professionales newP = new professionales()
            {
                statusId = statusId,
                price = price,
                userId = userId
            };
            db.professionales.Add(newP);
            int s=db.SaveChanges();
            return s;
                

        }


}
}

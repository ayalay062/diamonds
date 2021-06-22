using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;

namespace DTO
{
     public class ProfessionalesDTO
    {
        public int professionalId { get; set; }
        public string professionalName { get; set; }
        public Nullable<int> statusId { get; set; }
        public Nullable<double> price { get; set; }
        public int userId { get; set; }

        static DiampndsDBEntities db = new DiampndsDBEntities();
        public static ProfessionalesDTO convertToDTO(professionales pr)
        {
            return new ProfessionalesDTO()
            {
                professionalId =pr.professionalId,
                professionalName=db.users.Find(pr.userId).firstName,
                statusId = pr.statusId,
                price = pr.price,
                userId=pr.userId 
            };
        }
        public static List<ProfessionalesDTO> convertToListDTO(List<professionales> lpr)
        {
            var v = from x in lpr
                    select new ProfessionalesDTO()
                    {
                        professionalId = x.professionalId,
                        professionalName=db.users.Find(x.userId).firstName,
                        statusId =x.statusId,
                        price = x.price,
                        userId=x.userId
                    };
            return v.ToList();
        }
        public static  professionales convertToDB(ProfessionalesDTO pr)
        {
            return new professionales()
            {
                professionalId =pr.professionalId,
                statusId = pr.statusId,
                price = pr.price,
                userId = pr.userId
            };
        }
    }
}

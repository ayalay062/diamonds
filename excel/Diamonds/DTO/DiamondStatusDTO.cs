using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;

namespace DTO
{
     public class DiamondStatusDTO
    {
        public int diamondStatusId { get; set; }
        public Nullable<int> statusId { get; set; }
        public string statusName { get; set; }
        public Nullable<int> diamondId { get; set; }
        public string diamondName { get; set; }
        public Nullable<System.DateTime> startDate { get; set; }
        public Nullable<System.DateTime> endDate { get; set; }
        public Nullable<int> professionalId { get; set; }
        public string professionalName { get; set; }
        public double price { get; set; }
        
        public static DiamondStatusDTO convertToDTO(diamondStatus ds)
        {
            DiampndsDBEntities newDb = new DiampndsDBEntities();

            return new DiamondStatusDTO()
            {
                diamondStatusId = ds.diamondStatusId,
                statusId = ds.statusId,
                statusName = newDb.status.Find(ds.statusId).status1,
                diamondId = ds.diamondId,
                diamondName = newDb.Diamonds.Find(ds.diamondId).diamondName,
                startDate = ds.startDate,
                endDate = ds.endDate,
                professionalId = ds.professionalId,
                professionalName = newDb.users.Find(newDb.professionales.Find(ds.professionalId).userId).entringName,
                price = ds.price.Value
            };
        }
        public static List<DiamondStatusDTO> convertToListDTO(List<diamondStatus> lds)
        {
            DiampndsDBEntities newDb = new DiampndsDBEntities();
            var v = from x in lds
                    select new DiamondStatusDTO()
                    {
                        diamondStatusId = x.diamondStatusId,
                        statusId = x.statusId,
                        statusName=newDb.status.Find(x.statusId).status1,
                        diamondId = x.diamondId,
                        diamondName=newDb.Diamonds.Find(x.diamondId).diamondName,
                        startDate = x.startDate,
                        endDate = x.endDate,
                        professionalId = x.professionalId,
                        professionalName=newDb.users.Find(newDb.professionales.Find(x.professionalId).userId).entringName,
                        price = x.price.Value
                    };
            return v.ToList();
        }
        public static diamondStatus convertToDB(DiamondStatusDTO ds)
        {
            return new diamondStatus()
            {
                diamondStatusId = ds.diamondStatusId,
                statusId = ds.statusId,
                diamondId = ds.diamondId,
                startDate = ds.startDate,
                endDate = ds.endDate,
                professionalId = ds.professionalId,
                price = ds.price
            };
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;

namespace DTO
{
    public class StatusDTO
    {
        public int statusId { get; set; }
        public string status1 { get; set; }

        public static StatusDTO convertToDTO(status s)
        {
            return new StatusDTO()
            {
                statusId = s.statusId,
                status1 = s.status1
            };
        }
        public static List<StatusDTO> convertToListDTO(List<status> ls)
        {
            var v = from x in ls
                    select new StatusDTO()
                    {
                        statusId = x.statusId,
                        status1 = x.status1
                    };
            return v.ToList();
        }
        public static status convertToDB(StatusDTO s)
        {
            return new status()
            {
                statusId = s.statusId,
                status1 = s.status1
            };
        }



    }
}

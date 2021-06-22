using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DB;

namespace UI
{
    public class statusUI
    {
        static DiampndsDBEntities db = new DiampndsDBEntities();
        public static List<StatusDTO> getStatusList()
        {
            List<status> statusList = db.status.ToList();
            List<StatusDTO> statusListDto = StatusDTO.convertToListDTO(statusList);
            return statusListDto;
        }
        public static int getIdByName(string statusName)
        {
           int statusId=db.status.Where(x => x.status1 == statusName)
                .Select(y => y.statusId).FirstOrDefault();

            return statusId;  
        }
    }
}

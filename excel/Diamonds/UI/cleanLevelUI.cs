using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;
using DTO;

namespace UI
{
    public class cleanLevelUI
    {
        static DiampndsDBEntities db = new DiampndsDBEntities();
        public static List<CleanLevelDTo> getCleanList()
        {
            List<CleanLevelDTo> cleanLevelListDto =CleanLevelDTo.convertToListDTO(db.cleanLevels.ToList());
            return cleanLevelListDto;
        }
    }
}

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
            List<CleanLevelDTo> cleanList = CleanLevelDTo.convertToListDTO(db.cleanLevels.ToList());
            return cleanList;
        }
        public static int getCleanLevelIdByName(string cleanLevelName)
        {
            int id = db.cleanLevels.Where(x => x.cleanLevel == cleanLevelName)
                .Select(y => y.levelId).FirstOrDefault();
            return id;
        }
    }
}

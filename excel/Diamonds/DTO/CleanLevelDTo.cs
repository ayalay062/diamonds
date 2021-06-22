using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;

namespace DTO
{
    public class CleanLevelDTo
    {
        public int LevelId { get; set; }
        public string CleanLevel { get; set; }

        public static CleanLevelDTo convertToDTO(cleanLevels cl)
        {
            return new CleanLevelDTo()
            {
                LevelId = cl.levelId,
                CleanLevel = cl.cleanLevel
            };
        }
        public static List<CleanLevelDTo> convertToListDTO(List<cleanLevels> lc)
        {
            var c = from x in lc
                    select new CleanLevelDTo()
                    {
                        LevelId =x.levelId, 
                        CleanLevel =x.cleanLevel
                    };
            return c.ToList();
        }
        public static cleanLevels convertToDB(CleanLevelDTo cl)
        {
            return new cleanLevels()
            {
                levelId = cl.LevelId,
                cleanLevel = cl.CleanLevel
            };
        }
    }

}

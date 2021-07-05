using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;
using DTO;

namespace UI
{
    public class colorsUI
    {
        static DiampndsDBEntities db = new DiampndsDBEntities();

        public static List<ColorsDTO> getColorList()
        {
            List<ColorsDTO> lc = ColorsDTO.convertToListDTO(db.colors.ToList());
            return lc;
        }
        public static int getColorIdByName(string colorName)
        {
            int id = db.colors.Where(x => x.color == colorName)
                .Select(y=> y.colorId).FirstOrDefault();
            return id;
        }
    }
}

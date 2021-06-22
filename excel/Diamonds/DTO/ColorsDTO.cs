using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;

namespace DTO
{
    public class ColorsDTO
    {
        public int ColorId { get; set; }
        public string Color { get; set; }

        public static ColorsDTO convertToDTO(colors c)
        {
            return new ColorsDTO()
            {
                ColorId = c.colorId,
                Color = c.color
            };
        }
        public static List<ColorsDTO> convertToListDTO(List<colors> lc)
        {
            var l = from x in lc
                    select new ColorsDTO()
                    {
                        ColorId = x.colorId,
                        Color = x.color
                    };
            return l.ToList();
        }
        public static colors convertToDB(ColorsDTO c)
        {
            return new colors()
            {
                colorId = c.ColorId,
                color = c.Color
            };
        }
    }
}

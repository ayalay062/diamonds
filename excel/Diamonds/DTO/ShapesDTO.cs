using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;

 namespace DTO
{
    public class ShapesDTO
    {
        public int shapeId { get; set; }
        public string shape { get; set; }

        public static ShapesDTO convertToDTO(shapes s)
        {
            return new ShapesDTO()
            {
                shapeId = s.shapeId,
                shape = s.shape
            };
        }
        public static List<ShapesDTO> convertToListDTO(List<shapes> ls)
        {
            var v = from x in ls
                    select new ShapesDTO()
                    {
                        shapeId = x.shapeId,
                        shape = x.shape
                    };
            return v.ToList();
        }
        public static shapes convertToDB(ShapesDTO s)
        {
            return new shapes()
            {
                shapeId = s.shapeId,
                shape = s.shape
            };
        }
    }
}

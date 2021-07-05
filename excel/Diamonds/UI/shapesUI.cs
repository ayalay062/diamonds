using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;
using DTO;

namespace UI
{
   public class shapesUI
    {
        static DiampndsDBEntities db = new DiampndsDBEntities();
        public static List<ShapesDTO> getShapeList()
        {
            List<ShapesDTO> sl = ShapesDTO.convertToListDTO(db.shapes.ToList());
            return sl;
        }
        public static int getShapeIdByName(string shapeName)
        {
            int id = db.shapes.Where(x => x.shape == shapeName)
                    .Select(y => y.shapeId).FirstOrDefault();
            return id;
        }
    }
}

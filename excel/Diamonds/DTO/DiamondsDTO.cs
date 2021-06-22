using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;

namespace DTO
{
   public class DiamondsDTO
    {
        public int diamondId { get; set; }
        public string diamondName { get; set; }
        public Nullable<int> cleanLevelId { get; set; }
        public  string cleanLevelName { get; set; }
        public Nullable<int> colorId { get; set; }
        public string colorName { get; set; }
        public Nullable<int> shapeId { get; set; }
        public string shapeName { get; set; }
        public double CT { get; set; }

        static DiampndsDBEntities db = new DiampndsDBEntities();
        public static DiamondsDTO convertToDTO(Diamonds d)
        {
            return new DiamondsDTO()
            {
                diamondId = d.diamondId,
                diamondName = d.diamondName,
                cleanLevelId = d.cleanLevelId,
                cleanLevelName =db.cleanLevels.Find(d.cleanLevelId).cleanLevel,
                colorId = d.colorId,
                colorName =db.colors.Find(d.colorId).color,
                shapeId=d.shapeId,
                shapeName=db.shapes.Find(d.shapeId).shape,
                CT=d.CT.Value
            };
        }
        public static List<DiamondsDTO> convertToListDTO(List<Diamonds> ld)
        {
            var v = from x in ld
                    select new DiamondsDTO()
                    {
                        diamondId = x.diamondId,
                        diamondName = x.diamondName,
                        cleanLevelName = db.cleanLevels.Find(x.cleanLevelId).cleanLevel,
                        colorId = x.colorId,
                        colorName = db.colors.Find(x.colorId).color,
                        shapeId = x.shapeId,
                        shapeName = db.shapes.Find(x.shapeId).shape,
                        CT = x.CT.Value

                    };
            return v.ToList();
        }
        public static Diamonds convertToDB(DiamondsDTO d)
        {
            return new Diamonds()
            {
                diamondId = d.diamondId,
                diamondName = d.diamondName,
                cleanLevelId = d.cleanLevelId,
                colorId = d.colorId,
                shapeId = d.shapeId,
                CT = d.CT

            };
        }
        public static List<Diamonds> convertToListDB(List<DiamondsDTO> lddb)
        {
            var v = from x in lddb
                    select new Diamonds()
                    {
                        diamondId = x.diamondId,
                        diamondName = x.diamondName, 
                        cleanLevelId=x.cleanLevelId,
                        colorId = x.colorId,
                        shapeId = x.shapeId,
                        CT = x.CT
                    };
            return v.ToList();
        }
    }
}


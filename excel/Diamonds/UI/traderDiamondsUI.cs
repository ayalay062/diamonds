using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DB;

namespace UI
{
    public class traderDiamondsUI
    {
       static DiampndsDBEntities db = new DiampndsDBEntities();
        public static List<DiamondsDTO> getListDiamondsOfTrader(string name,string password)
        {
            int id = usersUI.getIdByNameAndPassword(name, password);
            List<int> diamondsList=db.traderDiamonds.Where(x => (x.TraderId == id)).
               Select(y => y.diamondId.Value).ToList();
            List<DiamondsDTO> diamondsListDTO = new List<DiamondsDTO>();
            foreach (int item in diamondsList)
            {
                diamondsListDTO.Add(DiamondsDTO.convertToDTO(db.Diamonds.Find(item)));
            }
            return diamondsListDTO;
        }
        public static string getNameById(traderDiamonds td)
        {
            string name = db.users.Where(x => (x.userId == td.TraderId)).
                Select(y => y.firstName).FirstOrDefault();
            return name;
        }
        public static int addNewDiamond(int traderId, DiamondsDTO d)
        {
            Diamonds nD = DiamondsDTO.convertToDB(d);
            nD.diamondId = d.diamondId;
            nD.diamondName = d.diamondName;
            nD.cleanLevelId = d.cleanLevelId;
            nD.colorId = d.colorId;
            nD.shapeId = d.shapeId;
            nD.CT = d.CT;
            db.Diamonds.Add(nD);


            return 1;
        }
    }
}

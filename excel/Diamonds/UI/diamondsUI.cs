using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;
using DTO;

namespace UI
{
    public class DiamondsUI
    {
        static DiampndsDBEntities db = new DiampndsDBEntities();
       public static int getIdByName(string name)
        {
            int id = db.Diamonds.Where(x => x.diamondName == name)
                      .Select(y => y.diamondId).FirstOrDefault();
            return id;
        }
        public static double getCTById(int id)
        {
            double idDiamond =db.Diamonds.Where(x => x.diamondId == id)
                .Select(y => y.CT.Value).FirstOrDefault();
            return idDiamond;

        }
        public static List<DiamondsDTO> removeDiamond(int diamondId,string traderName,string password)
        {
            traderDiamonds td = new traderDiamonds();
            List<DiamondsDTO> ld = new List<DiamondsDTO>();
            td=db.traderDiamonds.Where(x => x.diamondId == diamondId).FirstOrDefault();
            db.traderDiamonds.Remove(td);
            db.SaveChanges();
            ld=traderDiamondsUI.getListDiamondsOfTrader(traderName, password);
            return ld;
        }

    }
}

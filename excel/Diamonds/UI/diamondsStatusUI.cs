using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;
using DTO;

namespace UI
{
    public class diamondsStatusUI
    {
        static DiampndsDBEntities db = new DiampndsDBEntities();
        public static DiamondStatusDTO getDiamondsForEndingStatus(int professionalId, string diamondName, DateTime date)
        {
            int diamondId = UI.DiamondsUI.getIdByName(diamondName);
            List<diamondStatus> ds = db.diamondStatus.Where(x => (x.diamondId == diamondId && x.professionalId == professionalId)).ToList();
            diamondStatus ds1 = ds.Where(x => x.endDate == null).FirstOrDefault();
            ds1.endDate = date;
            DiamondStatusDTO dsDTO = DiamondStatusDTO.convertToDTO(ds1);
            ds1.price = (UI.professionalesUI.getPriceOfProfessional(professionalId)) * (UI.DiamondsUI.getCTById(diamondId));

            return dsDTO;
        }
        public static List<DiamondStatusDTO> getTraderFinishstatusDiamonds(string entringName, string password)
        {

            List<DiamondsDTO> diamondsTrader = traderDiamondsUI.getListDiamondsOfTrader(entringName, password);
            List<DiamondStatusDTO> diamondsFinishStatus = new List<DiamondStatusDTO>();
            DateTime max = new DateTime();
            diamondStatus ds=null;
            foreach (DiamondsDTO item in diamondsTrader)
            {
                List<diamondStatus> d = db.diamondStatus.Where(x => x.diamondId == item.diamondId).ToList();
                if (d.Count != 0)
                {
                    if (d[0].endDate != null)
                    {
                        max = d[0].endDate.Value;
                        foreach (diamondStatus id in d)
                        {
                            if (id.startDate < max )
                            {
                                max = id.startDate.Value;
                                ds = new diamondStatus();
                                ds = id;
                            }
                        }
                    }
                }
                if (ds != null)
                {
                    diamondsFinishStatus.Add(DiamondStatusDTO.convertToDTO(ds));
                    ds = null;
                }
            }
            return diamondsFinishStatus;
            
            
        }
       public static void updatDiamondToTheNextStatus()
        {

        }

    }
}


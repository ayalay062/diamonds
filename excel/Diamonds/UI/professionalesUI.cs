using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DB;

namespace UI
{
    public class professionalesUI
    {
        static DiampndsDBEntities db = new DiampndsDBEntities();
       public static double getPriceOfProfessional(int professionalId)
        {
           double priceOfProfessional=db.professionales.Where(x => x.professionalId == professionalId)
                .Select(y => y.price.Value).FirstOrDefault();

            return priceOfProfessional;
           
        }

        public static double getPriceOfDiamond(double price,double endCT,double startCT)
        {
            double endPrice =(startCT - endCT) * price;
            return endPrice;
        }
        public static List<professionalDiamonds> getProfessionalDiamonds(string entringName, string password)
        {
            int userId = usersUI.getIdByNameAndPassword(entringName, password);
            int professionalId = db.professionales.Where(x => x.userId == userId)
                .Select(y => y.professionalId).FirstOrDefault();
            List<diamondStatus> ls = db.diamondStatus.Where(x => x.professionalId == professionalId).ToList();
            List<int> lDiamondId = new List<int>();
            List<string> lDiamondName = new List<string>();
            List<DateTime> SEndDate = new List<DateTime>();
            List<float> lCT = new List<float>();
            professionalDiamonds pd = new professionalDiamonds();
            List<professionalDiamonds> lpd = new List<professionalDiamonds>();


            foreach (var item in ls)
            {
                if (item.endDate == null)
                {
                    SEndDate.Add(item.startDate.Value);
                    lDiamondId.Add(item.diamondId.Value);
                    lCT.Add((float) item.CT.Value);
                }
            }
            foreach (var item in lDiamondId)
            {
              string name=db.Diamonds.Where(x => x.diamondId == item)
                    .Select(y => y.diamondName).FirstOrDefault();
                lDiamondName.Add(name);

            }

            for(int i=0; i< lDiamondId.Count;i++)
            {
                for (int j = 0; j < db.traderDiamonds.Count(); j++)
                {
                    if (db.traderDiamonds.ToList()[j].diamondId == lDiamondId[i])
                    {
                        pd.traderId = db.traderDiamonds.ToList()[j].diamondId.Value;
                        break;
                    }
                }
                pd.traderLName = db.users.Where(x => x.userId == pd.traderId)
                    .Select(y => y.lastName).FirstOrDefault();
                pd.traderFName = db.users.Where(x => x.userId == pd.traderId)
                    .Select(y => y.firstName).FirstOrDefault();
                pd.diamondName = lDiamondName[i];
                pd.diamondId = lDiamondId[i];
                pd.startDate = SEndDate[i];
                pd.startCT = lCT[i];

                lpd.Add(pd);
            }
            return lpd;
        }
        
        public static int updateFinishStatus(double endCT,professionalDiamonds pd)
        {
            
            diamondStatus ds = db.diamondStatus.Where(x => (x.diamondId == pd.diamondId) && (x.endDate == null)).FirstOrDefault();
            double price = getPriceOfProfessional(ds.professionalId.Value);
            double endPrice = getPriceOfDiamond(price, endCT,ds.CT.Value);
            diamondStatus dsd = new diamondStatus()
            {
                diamondStatusId = ds.diamondStatusId,
                statusId = ds.statusId,
                diamondId = ds.diamondId,
                startDate = ds.startDate,
                endDate = null,
                professionalId = ds.professionalId,
                price = endPrice,
                CT = endCT
            };
            db.Entry(ds).CurrentValues.SetValues(dsd);
            int a = db.SaveChanges();
            return a;
        }
        public static List<ProfessionalesDTO> getProfessionalsOfStatus(string statusName)
        {
           List<ProfessionalesDTO> proDTO = new List<ProfessionalesDTO>();
           int statusId=statusUI.getIdByName(statusName);
                for (int j = 0; j < db.professionales.Count(); j++)
                {
                    if (db.professionales.ToList()[j].statusId == statusId)
                    {
                        professionales pro=db.professionales.ToList()[j];
                        proDTO.Add(ProfessionalesDTO.convertToDTO(pro));
                       
                    }
                }
                //professionales pro = db.professionales.Where(x => x.statusId == statusId).FirstOrDefault();
           //proDTO.Add(ProfessionalesDTO.convertToDTO(pro));
            return proDTO;
        }
        
    }

}

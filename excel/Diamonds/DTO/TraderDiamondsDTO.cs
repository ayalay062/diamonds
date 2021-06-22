using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;

namespace DTO
{
     public class TraderDiamondsDTO
    {
        public int DiamondTraderId { get; set; }
        public Nullable<int> TraderId { get; set; }
        public Nullable<int> DiamondId { get; set; }
        public Nullable<System.DateTime> ShoppingDate { get; set; }
        public Nullable<int> ShoppingPrice { get; set; }

        public static TraderDiamondsDTO convertToDTO(traderDiamonds t)
        {
            return new TraderDiamondsDTO()
            {
                DiamondTraderId = t.diamondTraderId,
                TraderId = t.TraderId,
                DiamondId = t.diamondId,
                ShoppingDate = t.shoppingDate,
                ShoppingPrice = t.shoppingPrice
            };
        }
        public static List<TraderDiamondsDTO> convertToListDTO(List<traderDiamonds> lt)
        {
            var v = from x in lt
                    select new TraderDiamondsDTO()
                    {
                        DiamondTraderId = x.diamondTraderId,
                        TraderId = x.TraderId,
                        DiamondId = x.diamondId,
                        ShoppingDate = x.shoppingDate,
                        ShoppingPrice = x.shoppingPrice
                    };
            return v.ToList();
        }
        public static traderDiamonds convertToDB(TraderDiamondsDTO t)
        {
            return new traderDiamonds()
            {
                diamondTraderId = t.DiamondTraderId,
                TraderId = t.TraderId,
                diamondId = t.DiamondId,
                shoppingDate = t.ShoppingDate,
                shoppingPrice = t.ShoppingPrice
            };
        }
    }
}

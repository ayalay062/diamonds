//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DB
{
    using System;
    using System.Collections.Generic;
    
    public partial class traderDiamonds
    {
        public int diamondTraderId { get; set; }
        public Nullable<int> TraderId { get; set; }
        public Nullable<int> diamondId { get; set; }
        public Nullable<System.DateTime> shoppingDate { get; set; }
        public Nullable<int> shoppingPrice { get; set; }
    
        public virtual Diamonds Diamonds { get; set; }
        public virtual users users { get; set; }
    }
}

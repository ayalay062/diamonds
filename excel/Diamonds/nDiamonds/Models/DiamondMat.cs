using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace nDiamonds.Models
{
    public class DiamondMat
    {
        public DiamondMat()
        {
            SizesList = new List<Size>();
        }
        public List<Size> SizesList { get; set; }
    }

    public class Color
    {
        public int BeginIndex { get; set; }
        public int EndIndex { get; set; }
        public double Price { get; set; }
    }

    public class CleanLevel
    {
        public int BeginIndex { get; set; }
        public int EndIndex { get; set; }
        public List<Color> Colors { get; set; }
    }

    public class Size
    {
        public double MinSize { get; set; }
        public double MaxSize { get; set; }
        public List<CleanLevel> Clears { get; set; }
    }

}
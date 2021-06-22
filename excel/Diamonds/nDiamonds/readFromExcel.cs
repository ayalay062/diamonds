using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Excel=Microsoft.Office.Interop.Excel;
using DB;


namespace nDiamonds
{
    public class readFromExcel
    {
        static DiampndsDBEntities db = new DiampndsDBEntities();
        public static void readFromExcel1()
        {
            Excel.Application xlApp = new Excel.Application();
            Excel.Workbook xlWorkbook = xlApp.Workbooks.Open(@"F:\תיקייה כללית\שנה ב תשפ\פרויקטים\גילי ומירי\LISTS.xlsx");
           
            for (int i = 1; i < 4; i++)
            {
                Excel._Worksheet xlWorksheet = xlWorkbook.Sheets[i];
                Excel.Range xlRange = xlWorksheet.UsedRange;
                object[, ,] valueArray = (object[, ,])xlRange.get_Value(
                   Excel.XlRangeValueDataType.xlRangeValueDefault);
                for (int a = 1; a <= xlRange.Row; a++)
                {
                    for (int b = 1; b <= xlRange.Column; b++)
                    {
                        if (b == 1)
                            //write the value to the console
                            if (xlRange.Cells[a, b] != null && xlRange.Cells[a, b].Value2 != null)
                                Console.WriteLine(xlRange.Cells[a, b]);
                    }
                }
            }
        }
        public static void pouringToTable(string color,string cleanLevel,int sheetId )
        {
            int sheet;
            int colorId = db.colors.Where(x => x.color == color)
               .Select(y => y.colorId).FirstOrDefault();
            int cleanLevelId = db.cleanLevels.Where(x => x.cleanLevel == cleanLevel)
               .Select(y => y.levelId).FirstOrDefault();
            if (sheetId == 3)
                sheet = 1;
            else
                sheet = 11;
        }
    }
}

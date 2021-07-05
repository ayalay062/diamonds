import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Status } from '../Classes/status';
import { DiamonddetailsComponent } from '../Components/diamonddetails/diamonddetails.component';
import { DeleteComponent } from '../Components/delete/delete.component';
import { UpdateComponent } from '../Components/update/update.component';
import { DiamondsOfTrader } from '../Classes/diamonds-of-trader';
import { UpdateConfirmComponent } from '../Components/update-confirm/update-confirm.component';
import { ConfirmNewDiamondComponent } from '../Components/confirm-new-diamond/confirm-new-diamond.component';


@Injectable({
  providedIn: 'root'
})
export class MessageserService
 {
  constructor(private dialog:MatDialog/*,public cUpdate:UpdateComponent*/) { }

  showDiamondDitails(header:string,item:Status,okPassStatus:boolean,afterClose): void
  { 
    const diamondDialog =this.dialog.open(DiamonddetailsComponent,
    { 
      panelClass:'diamonddetails',
      width:'500px',
      height:'400px',
      data :{header:header,item:item,okPassStatus:okPassStatus}
    });
    diamondDialog.afterClosed().subscribe
    (
      result=>
      {
        if(result)
       afterClose();
      }
    )
   }
   showUpdateComp(header:string,content:DiamondsOfTrader,confirmUpdate:boolean,afterClose)
   {
     const updateDialog=this.dialog.open(UpdateComponent,
      {
        panelClass:'app-update',
        width:'700px',
        height:'600px',
        data:{header:header,content:content,confirmUpdate:confirmUpdate}
      });

     updateDialog.afterClosed().subscribe
      (
        result=>
        {
          if(result)
          afterClose();
        }
      )
   }
   updateConfirm(header:string,content:string,confirmUp:boolean,afterClose): void
  {
    const cUpdateDialog=this.dialog.open(UpdateConfirmComponent,
      {
        panelClass:'app-update-confirm',
        width:'300px',
        height:'250px',
        data :{header:header,content:content,confirmUp:confirmUp}

      });
      cUpdateDialog.afterClosed().subscribe(
        result=>
        {
          if(result) 
          afterClose();
      //      this.cUpdate.updateConfirm();
         
        }
      )
  }

   showDeleteComp(header:string,content:string,confirmDel:boolean,afterClose): void
   {
    const diamondDialog =this.dialog.open(DeleteComponent,
      { 
        panelClass:'app-delete',
        width:'300px',
        height:'250px',
        data :{header:header,content:content,confirmDel:confirmDel}
      });


      diamondDialog.afterClosed().subscribe
      (
        result=>
        {
         if(result)
         afterClose();
        }
      )
   }
   confirmNewDiamond(content:string,confirm:boolean):void
   {
    const  cnd=this.dialog.open(ConfirmNewDiamondComponent,
      {
        panelClass:'app-confirm-new-diamond',
        width:'300px',
        height:'250px',
        data :{content:content,confirm:confirm}
      })
   }
  
}
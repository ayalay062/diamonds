import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageserService } from '../../servies/messageser.service';

@Component({
  selector: 'app-confirm-new-diamond',
  templateUrl: './confirm-new-diamond.component.html',
  styleUrls: ['./confirm-new-diamond.component.css']
})
export class ConfirmNewDiamondComponent implements OnInit {
content:string;
confirm:boolean;
  constructor(public dialogRef:MatDialogRef<MessageserService>,@Inject(MAT_DIALOG_DATA) public data:any) 
  {
    this.content=this.data.content;
    this.confirm=this.data.confirm;
   }


  ngOnInit() {
  }

}

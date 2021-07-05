import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageserService } from '../../servies/messageser.service';

@Component({
  selector: 'app-update-confirm',
  templateUrl: './update-confirm.component.html',
  styleUrls: ['./update-confirm.component.css']
})
export class UpdateConfirmComponent implements OnInit {
  header: string;
  content: string;
  confirmUp: boolean;

  constructor(public dialogRef:MatDialogRef<MessageserService>, @Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.header=this.data.header,
    this.content=this.data.content,
    this.confirmUp=this.data.confirmUp   
    }

  ngOnInit() {
  }
  saveChanges()
  {
    this.dialogRef.close(
      
    );
  }

}

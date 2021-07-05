import { Component, OnInit, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MessageserService } from 'src/app/servies/messageser.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  header:string;
  content:string;
  confirmDel:boolean;

  constructor(public dialogRef: MatDialogRef<MessageserService>, @Inject(MAT_DIALOG_DATA) public data:any) {
    this.header=data.header;
    this.content=data.content;
    this.confirmDel=data.confirmDel;
   }

  ngOnInit() {
  }

  
}

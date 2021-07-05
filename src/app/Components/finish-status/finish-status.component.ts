import { Component, OnInit } from '@angular/core';
import { FinishStatusService } from '../../servies/finish-status.service';
import { Status } from '../../Classes/status';
import { matTabsAnimations, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-finish-status',
  templateUrl: './finish-status.component.html',
  styleUrls: ['./finish-status.component.css']
})
export class FinishStatusComponent implements OnInit {
listDiamonds:Array<Status>;

displayedColumns:string[]=[];
dataSource= new MatTableDataSource<Status>(this.listDiamonds);


  constructor(private fsSer:FinishStatusService) { }

  ngOnInit() {
}
    // this.fsSer.diamondWithFinisfStatus().subscribe(data=>{
    //  this.listDiamonds=data;
    //  this.dataSource=new MatTableDataSource<Status>(this.listDiamonds)
    // },
    //   err=>{
    //     console.error(err)}
    // )};
  
}


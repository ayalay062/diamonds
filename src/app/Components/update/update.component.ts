import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageserService } from '../../servies/messageser.service';
import { DiamondsOfTrader } from '../../Classes/diamonds-of-trader';
import { TraderSerService } from '../../servies/trader-ser.service';
import { CleanLevels } from '../../Classes/clean-levels';
import { Console } from 'console';
import { Shapes } from '../../Classes/shapes';
import { Colors } from '../../Classes/colors';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  header:string;
  content:DiamondsOfTrader;
  confirmUpdate:boolean;
  cleanList:Array<CleanLevels>=[];
  shapeList:Array<Shapes>=[];
  newCLevel:CleanLevels;
  colorList:Array<Colors>=[];
  updateDiamond:DiamondsOfTrader=new DiamondsOfTrader(null,"",null,"",null,"",null,"",null);
 
  constructor( public dialogRef:MatDialogRef<MessageserService>,@Inject(MAT_DIALOG_DATA) public data:any,public tser:TraderSerService,public mSer:MessageserService)
  {
    this.header=this.data.header,
    this.content=this.data.content ,
    this.confirmUpdate=this.data.confirmUpdate;
  }

  ngOnInit() {
    
  }

 getCleanList()
  {
    this.tser.getCleanList().subscribe(data=>{
      this.cleanList=data
    },
    err=>
    console.log(err)
    );
  }

  getColorList()
  {
    this.tser.getColorList().subscribe(data=>{
    this.colorList=data;
    },
    err=>
    console.log(err)
    );
  }
  getShapeList()
  {
    this.tser.getShapeList().subscribe(data=>{
      this.shapeList=data;
    },
    err=>
    console.log(err)
    );
  }
  updateConfirm()
    {
      this.mSer.updateConfirm("שים לב!","האם אתה בטוח שברצונך לשמור את השינוים?",true,function(){
    
})
    }
  
}

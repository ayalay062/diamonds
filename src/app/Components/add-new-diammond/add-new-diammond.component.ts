import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { networkInterfaces } from 'os';
import { CleanLevels } from '../../Classes/clean-levels';
import { Colors } from '../../Classes/colors';
import { DiamondsOfTrader } from '../../Classes/diamonds-of-trader';
import { Shapes } from '../../Classes/shapes';
import { MessageserService } from '../../servies/messageser.service';
import { TraderSerService } from '../../servies/trader-ser.service';

@Component({
  selector: 'app-add-new-diammond',
  templateUrl: './add-new-diammond.component.html',
  styleUrls: ['./add-new-diammond.component.css']
})
export class AddNewDiammondComponent implements OnInit {
  form: FormGroup;
  name: string;
  password: string;
  selectCleanLevel: Array<CleanLevels>;
  selectColor:Array<Colors>;
  selectShape:Array<Shapes>;
  confirmAdd:boolean;
  newDiamond:DiamondsOfTrader;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private tSer: TraderSerService,private router:Router,private mSer:MessageserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params["name"]
      this.password = params["password"]
    });
    this.initForm();
    this.getCleanLevelList();
    this.getColorList();
    this.getShapeList();
  }
  initForm() {
    this.form = this.fb.group({
      diamondName: [null, Validators.required],
      cleanLevelName: [null, Validators.required],
      colorName: [null, Validators.required],
      shapeName: [null, Validators.required],
      CT:[null,Validators.required],
      price:[null,Validators.required]

    })
 }
  getCleanLevelList() {
    this.tSer.getCleanList().subscribe(data => {
      this.selectCleanLevel = data;
    },
      err => {
        console.log(err)
      });
  }

  getColorList() {
    this.tSer.getColorList().subscribe(data => {
      this.selectColor = data;
    },
      err => {
        console.log(err)
      });
  }

  getShapeList() {
    this.tSer.getShapeList().subscribe(data => {
      this.selectShape = data;
    },
      err => {
        console.log(err)
      });
  }
  onSubmit()
  {
    this.newDiamond.diamondName=this.form.get('diamondName').value;
    this.newDiamond.cleanLevelName=this.form.get('cleanLevelName').value;
    this.newDiamond.colorName=this.form.get('colorName').value;
    this.newDiamond.shapeName=this.form.get('shapeName').value;
    this.newDiamond.CT=this.form.get('CT').value;
    this.addNewDiamond(this.form.get('price').value,this.newDiamond);
  }
  addNewDiamond(price:number,newDiamond:DiamondsOfTrader)
  {
    this.tSer.addNewDiamond(this.name,this.password,price,newDiamond).subscribe(data=>{
      this.confirmAdd=data;
    },
    err=>{
      console.log(err);
    });
    if(this.confirmAdd==true)
    {
      this.mSer.confirmNewDiamond("היהלום נוסף בהצלחה למאגר !",false);
      this.router.navigate(["/diamonds-of-trader",this.name,this.password]);
    }
    else
    {
      alert("היהלום לא התווסף למערכת, ניתן לנסות שנית !");
      this.router.navigate(["/diamonds-of-trader",this.name,this.password]);
    }
  }
 
}

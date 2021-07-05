import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { networkInterfaces } from "os";
import Swal from "sweetalert2";
import { CleanLevels } from "../../Classes/clean-levels";
import { Colors } from "../../Classes/colors";
import { DiamondsOfTrader } from "../../Classes/diamonds-of-trader";
import { Shapes } from "../../Classes/shapes";
import { MessageserService } from "../../servies/messageser.service";
import { TraderSerService } from "../../servies/trader-ser.service";

@Component({
  selector: "app-add-new-diammond",
  templateUrl: "./add-new-diammond.component.html",
  styleUrls: ["./add-new-diammond.component.css"],
})
export class AddNewDiammondComponent implements OnInit {
  form: FormGroup;
  name: string;
  password: string;
  selectCleanLevel: Array<CleanLevels>;
  selectColor: Array<Colors>;
  selectShape: Array<Shapes>;
  confirmAdd: boolean;
  newDiamond: DiamondsOfTrader;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private tSer: TraderSerService,
    private router: Router,
    private mSer: MessageserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name = localStorage.getItem("name");
      this.password = localStorage.getItem("password");
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
      CT: [null, Validators.required],
      price: [null, Validators.required],
    });
  }
  getCleanLevelList() {
    this.tSer.getCleanList().subscribe(
      (data) => {
        this.selectCleanLevel = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getColorList() {
    this.tSer.getColorList().subscribe(
      (data) => {
        this.selectColor = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getShapeList() {
    this.tSer.getShapeList().subscribe(
      (data) => {
        this.selectShape = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSubmit() {
    this.newDiamond = <DiamondsOfTrader>this.form.value;
    this.newDiamond.cleanLevelId = (<CleanLevels>(this.form.get("cleanLevelName").value)).LevelId;
    this.newDiamond.colorId = (<Colors>(this.form.get("colorName").value)).ColorId;  
    this.newDiamond.shapeId = (<Shapes>(this.form.get("shapeName").value)).shapeId;
    
    this.newDiamond.cleanLevelName = null;
    this.newDiamond.colorName = null;
    this.newDiamond.shapeName= null;
  
    this.addNewDiamond(this.form.get("price").value, this.newDiamond);
  }
  addNewDiamond(price: number, newDiamond: DiamondsOfTrader) {
    this.tSer
      .addNewDiamond(this.name, this.password, price, newDiamond)
      .subscribe(
        (data) => {
          this.confirmAdd = data;
          if (this.confirmAdd == true) {
            Swal.fire('',"היהלום נוסף בהצלחה למאגר !",'success');
            this.router.navigate(["/diamonds-of-trader"]);
          } else {
            Swal.fire('',"היהלום לא התווסף למערכת, ניתן לנסות שנית !",'error');
            this.router.navigate(["/diamonds-of-trader"]);
          }
        },
        (err) => {
          console.log(err);
        }
      );
 
  }
}

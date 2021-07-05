import { Component, OnInit, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MessageserService } from "../../servies/messageser.service";
import { DiamondsOfTrader } from "../../Classes/diamonds-of-trader";
import { TraderSerService } from "../../servies/trader-ser.service";
import { CleanLevels } from "../../Classes/clean-levels";
import { Console } from "console";
import { Shapes } from "../../Classes/shapes";
import { Colors } from "../../Classes/colors";
import { FormBuilder, Validators } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"],
})
export class UpdateComponent implements OnInit {
  form = this.fb.group({
    diamondName: ["", Validators.required],
    cleanLevelName: ["", Validators.required],
    colorName: ["", Validators.required],
    shapeName: ["", Validators.required],
    CT: ["", Validators.required],
  });
  header: string;
  content: DiamondsOfTrader;
  confirmUpdate: boolean;
  cleanList: Array<CleanLevels> = [];
  shapeList: Array<Shapes> = [];
  newCLevel: CleanLevels;
  colorList: Array<Colors> = [];
  updateDiamond: DiamondsOfTrader = new DiamondsOfTrader(
    null,
    "",
    null,
    "",
    null,
    "",
    null,
    "",
    null
  );

  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public tser: TraderSerService,
    public mSer: MessageserService,
    private fb: FormBuilder
  ) {
    // (this.header = this.data.header),
    //   (this.content = this.data.content),
    //   (this.confirmUpdate = this.data.confirmUpdate),
  }

  ngOnInit() {
    this.updateDiamond = this.data.diamond;
    this.form = this.fb.group(this.data.diamond);
    this.getCleanList();
    this.getColorList();
    this.getShapeList();
  }

  getCleanList() {
    this.tser.getCleanList().subscribe(
      (data) => {
        this.cleanList = data;
        this.form.patchValue({
          cleanLevelName: this.cleanList.filter(
            (x) => x.LevelId == this.updateDiamond.cleanLevelId
          )[0],
        });
      },
      (err) => console.log(err)
    );
  }

  getColorList() {
    this.tser.getColorList().subscribe(
      (data) => {
        this.colorList = data;
        this.form.patchValue({
          colorName: this.colorList.filter(
            (x) => x.ColorId == this.updateDiamond.colorId
            )[0],
        });
      },
      (err) => console.log(err)
    );
  }
  getShapeList() {
    this.tser.getShapeList().subscribe(
      (data) => {
        this.shapeList = data;
        this.form.patchValue({
          shapeName: this.shapeList.filter(
            (x) => x.shapeId == this.updateDiamond.shapeId
            )[0],
        });
      },
      (err) => console.log(err)
    );
  }
  close() {
    if (this.dialogRef && this.dialogRef.close) {
      this.dialogRef.close({ data: "Order" });
    }
  }
  updateConfirm() {
    this.updateDiamond = <DiamondsOfTrader>this.form.value;
    this.updateDiamond.cleanLevelId = (<CleanLevels>(
      this.form.get("cleanLevelName").value
    )).LevelId;
    this.updateDiamond.colorId = (<Colors>(
      this.form.get("colorName").value
    )).ColorId;
    this.updateDiamond.shapeId = (<Shapes>(
      this.form.get("shapeName").value
    )).shapeId;

    this.updateDiamond.cleanLevelName = null;
    this.updateDiamond.colorName = null;
    this.updateDiamond.shapeName = null;
var self = this;
    Swal.fire({
      title: "שים לב!",
      text: "האם אתה בטוח שברצונך לשמור את השינוים?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "עדכן",
      cancelButtonText: "ביטול",
    }).then(function (result) {
      if (result.value) {
        self.close();
        // this.traderS.updateDiamond().subscribe(data =>
        //   {
        //    },
        //    err =>
        //    {
        //      console.log(err);
        //    }
        //  )
      }
      else{
        self.close();
      }
    });
  }
}

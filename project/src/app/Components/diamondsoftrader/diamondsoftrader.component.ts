import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
// import { MatTableDataSource } from '@angular/material';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DiamondsOfTrader } from '../../Classes/diamonds-of-trader';
import { TraderSerService } from '../../servies/trader-ser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debug } from 'util';
import { FinishStatusService } from '../../servies/finish-status.service';
import { Status } from '../../Classes/status';
import { MessageserService } from '../../servies/messageser.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { setInterval } from 'timers';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { UpdateComponent } from '../update/update.component';
import { DiamonddetailsComponent } from '../diamonddetails/diamonddetails.component';

@Component({
  selector: 'app-diamondsoftrader',
  templateUrl: './diamondsoftrader.component.html',
  styleUrls: ['./diamondsoftrader.component.css']

})
export class DiamondsoftraderComponent implements OnInit, OnDestroy
{
  answer: boolean;
  diamonds: Array<DiamondsOfTrader> = [];
  statusList: Array<Status>;
  displayedColumns: string[] = ['name', 'cleanLevel', 'colorName', 'shapeName', 'CT','remove','update']
  dataSource = new MatTableDataSource<DiamondsOfTrader>(this.diamonds)
  name: string;
  password: string;
  hasStatus = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private dialog: MatDialog, private traderS: TraderSerService, private router: Router, private finishSer: FinishStatusService, private msgSer: MessageserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = localStorage.getItem("name")
      this.password = localStorage.getItem("password")
      this.listTraderDiamonds(this.name, this.password);
    });
    this.dataSource.paginator = this.paginator;
  }

  listTraderDiamonds(name: string, password: string) 
  {
    this.traderS.listTraderDiamonds(name, password).subscribe(
      data => {
        this.diamonds = data;
        this.dataSource = new MatTableDataSource<DiamondsOfTrader>(this.diamonds)
      },
      err =>
       {
        Swal.fire("Ooops",err.Message, "error");
      }
    );
  }
  timer: NodeJS.Timer;
  subscription = new Subscription();

  getDiamondsOfFinishStatus() {
    this.timer = setInterval(() => {
      this.subscription = this.finishSer.diamondWithFinisfStatus(this.name, this.password).subscribe(
        data => {
          this.statusList = data;
          this.hasStatus = true;
        },
        err => {
          console.log(err);
        }
      )
    }, 2000);
  }

  getDiamondDeatails(item: Status) {
    const updateDialog=this.dialog.open(DiamonddetailsComponent,
      {     
        data:{item:item}
      });

     updateDialog.afterClosed().subscribe
      (
        result=>
        {
          if(result)
          this.listTraderDiamonds(this.name, this.password);
        }
      )


   // this.msgSer.showDiamondDitails("פרטי היהלום", item, true, null)
  }

  ngOnDestroy(): void {

    if(this.timer)
    {
      this.timer.unref();

    }
    this.subscription.unsubscribe();
  }

  addDiamond() {
    this.router.navigate(["add-new-diammond/"]);
  }
  updateDiamond(item:DiamondsOfTrader) {
    const updateDialog=this.dialog.open(UpdateComponent,
      {     
        data:{diamond:item}
      });

     updateDialog.afterClosed().subscribe
      (
        result=>
        {
          if(result)
          this.listTraderDiamonds(this.name, this.password);
        }
      )


  
  }
  confirmDelete(diamondId: number)
   {
    Swal.fire({
      title: "מחיקת יהלום",
      text: "האם את/ה בטוח/ה שאת/ה רוצה למחוק את היהלום?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "מחק",
      cancelButtonText:'ביטול'
  }).then(function(result) {
      if (result.value) {
        this.traderS.removeDiamond(diamondId, this.name, this.password).subscribe(data =>
          {
           this.diamonds = data;
           this.dataSource = new MatTableDataSource<DiamondsOfTrader>(this.diamonds);
          },
           err => 
           {
             console.log(err);
           }
         )
     
      }
  });

  }
}



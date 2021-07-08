import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DiamondsOfTrader } from 'src/app/Classes/diamonds-of-trader';
import { TraderSerService } from 'src/app/servies/trader-ser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-diamonds-sale',
  templateUrl: './diamonds-sale.component.html',
  styleUrls: ['./diamonds-sale.component.css']
})
export class DiamondsSaleComponent implements OnInit {

  answer: boolean;
  diamonds: Array<DiamondsOfTrader> = [];

  displayedColumns: string[] = ['name', 'colorName', 'shapeName', 'CT','monOut','monToPay','prec','totalMo','remove']
  dataSource = new MatTableDataSource<DiamondsOfTrader>(this.diamonds)
  name: string;
  password: string;
  hasStatus = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private traderS: TraderSerService, private router: Router) { }

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


 
 
  
}



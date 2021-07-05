import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessianolService } from '../../servies/professianol.service';
import { ProfessionalDiamonds } from '../../Classes/professional-diamonds';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-diamond-of-professional',
  templateUrl: './diamond-of-professional.component.html',
  styleUrls: ['./diamond-of-professional.component.css']
})
export class DiamondOfProfessionalComponent implements OnInit {
  name: string;
  password: string;
  endCT: number;
  answer: boolean;
  DiamondsList: ProfessionalDiamonds[];
  displayedColumns: string[] = ['traderName', 'diamondName', 'startDate', 'startCT', 'endCT', 'end'];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private pSer: ProfessianolService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = localStorage.getItem("name")
      this.password = localStorage.getItem("password")
      this.getProfessionalDitails(this.name, this.password);
    });
  }

  getProfessionalDitails(name: string, password: string) {
    this.pSer.getProfessionalDiamonds(name, password).subscribe(data => {
      this.DiamondsList = data;
      this.dataSource = new MatTableDataSource<ProfessionalDiamonds>(this.DiamondsList)
    },
      err => {
        Swal.fire("Ooops",err.Message, "error");

      });
  }

  endStatus(element: ProfessionalDiamonds) {
    this.pSer.updateFinishStatus(element, this.endCT).subscribe(data => {
      this.answer = data;
      if (this.answer == true)

        Swal.fire("","השמירה בוצעה בהצלחה", "success");
      else

        Swal.fire("Ooops","): העידכון נכשל", "error");
    },
      err => {
        Swal.fire("Ooops",err.Message, "error");
      });
  }

}

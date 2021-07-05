import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Status } from '../../Classes/status';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfessianolService } from '../../servies/professianol.service';
import { Professionales } from '../../Classes/professionales';

@Component({
  selector: 'app-diamonddetails',
  templateUrl: './diamonddetails.component.html',
  styleUrls: ['./diamonddetails.component.css']
})
export class DiamonddetailsComponent implements OnInit {
  header: string;
  diamond: Status;
  okPassStatus: boolean;
  statusList: Array<Status> = [];
  professionalList: Array<Professionales>;
  current: string="";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private professionalSer: ProfessianolService) {
    this.header = data.header;
    this.diamond = data.item;
    this.okPassStatus = data.okPassStatus;
  };
  ngOnInit() {
    this.nextStatus();
  }
  nextStatus() {
    this.professionalSer.getListOfStatus().subscribe(data => {
      this.statusList = data;
    },
      err => console.log(err)
    );
  }
  
  getProfessionalOfStatus(statusName: string) {
    this.professionalList=[];
    this.current=statusName
    this.professionalSer.getProfessionalOfStatus(statusName).subscribe(answer => {
    this.professionalList = answer;
    },
      err => console.log(err)
    );
  }
}
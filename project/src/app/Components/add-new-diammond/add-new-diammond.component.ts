import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-diammond',
  templateUrl: './add-new-diammond.component.html',
  styleUrls: ['./add-new-diammond.component.css']
})
export class AddNewDiammondComponent implements OnInit {
 form:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.initForm();

  }
initForm()
  {
    this.form=this.fb.group({
      diamondName:[null,Validators.required],
      cleanLevelName:[null,Validators.required],
      colorName:[null,Validators.required],
      shapeName:[null,Validators.required]

    })
  }

}

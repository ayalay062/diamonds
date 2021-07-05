import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicService } from '../../servies/public.service';
import { UsersService } from '../../servies/users.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { TraderSerService } from '../../servies/trader-ser.service';


@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {
  answer: string;
  selectTop: Array<string> = ["סוחר", "בעל מלאכה"];
  form: FormGroup;
  constructor(private route: Router, private fb: FormBuilder, private users: UsersService, private pSer: PublicService, private trader: TraderSerService) { }


  ngOnInit() {
    this.initForm();

  }
  initForm() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(10)])],
      new: []

    });
  }

  onSubmit() {

    if (this.form.get('new').value == this.selectTop[0]) {
      this.route.navigate(["/new-trader",this.form.get('name').value,this.form.get('password').value]);
    }
    else if (this.form.get('new').value == this.selectTop[1]) {
      this.route.navigate(["/n-professional",this.form.get('name').value,this.form.get('password').value])
    }
    
    else 
    {
  this.users.ifExsist(this.form.get('name').value, this.form.get('password').value).subscribe(
    data => {
      this.answer = data
      if (this.answer == "professional") {
        this.route.navigate(["/diamond-of-professional",this.form.get('name').value,this.form.get('password').value]);
      }
      else if (this.answer == "trader") {
        this.route.navigate(["/diamonds-of-trader", this.form.get('name').value, this.form.get('password').value]);
      }
      else
        alert("שם או סיסמא שגוים");
    },
    // err => {
    //   alert(err.Message);
    // }
  );

}
  }
}


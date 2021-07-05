import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PublicService } from "../../servies/public.service";
import { UsersService } from "../../servies/users.service";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { TraderSerService } from "../../servies/trader-ser.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-enter",
  templateUrl: "./enter.component.html",
  styleUrls: ["./enter.component.css"],
})
export class EnterComponent implements OnInit {
  answer: string;
  selectTop: Array<string> = ["סוחר", "בעל מלאכה"];
  form: FormGroup;
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private users: UsersService,
    private pSer: PublicService,
    private trader: TraderSerService
  ) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      name: this.fb.control("", [Validators.required]),
     
      password: this.fb.control("", [Validators.required]),
     
      new: this.fb.control(""),
    });
  }

  onSubmit() {
    localStorage.setItem(
      "name",
      this.form.get("name").value
    );
    localStorage.setItem(
      "password",
      this.form.get("password").value
    );

    if (this.form.get("new").value == this.selectTop[0]) {
      this.route.navigate([
        "/new-trader"
      ]);
    } else if (this.form.get("new").value == this.selectTop[1]) {
      this.route.navigate([
        "/n-professional"
      ]);
    } else {
      this.users
        .ifExsist(this.form.get("name").value, this.form.get("password").value)
        .subscribe(
          (data) => {
            this.answer = data;
            if (this.answer == "professional") {
              this.route.navigate([
                "/diamond-of-professional"
              ]);
            } else if (this.answer == "trader") {
              this.route.navigate([
                "/diamonds-of-trader"
              ]);
            } else Swal.fire("Ooops","שם או סיסמא שגוים", "error");
          }
          // err => {
          //   alert(err.Message);
          // }
        );
    }
  }
}

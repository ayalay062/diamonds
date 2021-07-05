import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  NgForm,
  AbstractControl,
} from "@angular/forms";
import { PublicService } from "../../servies/public.service";
import { Key } from "protractor";
import { UsersService } from "../../servies/users.service";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { TraderSerService } from "../../servies/trader-ser.service";
import { User } from "../../Classes/user";
import Swal from "sweetalert2";

@Component({
  selector: "app-newtrader",
  templateUrl: "./newtrader.component.html",
  styleUrls: ["./newtrader.component.css"],
})
export class NewtraderComponent implements OnInit {
  formTrader: FormGroup;
  bool: Boolean;
  // newTrader:User=new User("","","","","","");
  newTrader: User;
  answer: boolean;
  constructor(
    private rourt: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userSer: UsersService,
    private traderSer: TraderSerService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.initForm(localStorage.getItem("name"), localStorage.getItem("password"));
    });
  }

  initForm(name: string, password: string) {
    this.formTrader = this.fb.group({
      EntringName: [null, Validators.required],
      Password: [null, Validators.required],
      passwordAuthentication: [null, Validators.required],
      FirstName: [null, Validators.compose([Validators.required])],
      LastName: [
        null,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      Mail: [null, Validators.compose([Validators.required, Validators.email])],
      Mobile: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("^[0-9]*$"),
        ]),
      ],
    });
    this.updatePasswordAndName(name, password);
  }

  updatePasswordAndName(name: string, password: string) {
    this.formTrader.get("EntringName").setValue(name);
    this.formTrader.get("Password").setValue(password);
  }
  onSubmit() {
    //  this.newTrader=new User(this.formTrader.get('EntringName').value,
    //  this.formTrader.get('Password').value,
    //  this.formTrader.get('FirstName').value,
    //  this.formTrader.get('LastName').value,
    //  this.formTrader.get('Mail').value,
    //  this.formTrader.get('Mobile').value,
    // );
    this.newTrader = this.formTrader.value;
    this.userSer
      .singularPassword(this.formTrader.get("Password").value)
      .subscribe(
        (data) => {
          this.bool = data;
          if (this.bool == false) {
            Swal.fire(
              "Ooops",
              "הסיסמא קימת במערכת ,נא הכנס סיסמא חדשה",
              "warning"
            );
          } else {
            this.traderSer.addNewTrader(this.newTrader).subscribe((answer) => {
              this.answer = answer;
              if (this.answer == true) {
                Swal.fire("", "השמירה בוצעה בהצלחה", "success");
                localStorage.setItem(
                  "name",
                  this.formTrader.get("EntringName").value
                );
                localStorage.setItem(
                  "password",
                  this.formTrader.get("Password").value
                );
                this.rourt.navigate(["/diamonds-of-trader"]);
              } else Swal.fire("Ooops", "ההרשמה נכשלה", "error");
            });
          }
        },
        (err) => {
          Swal.fire("Ooops", err.Message, "error");
        }
      );
  }
}

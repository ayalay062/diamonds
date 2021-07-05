import { Component, OnInit } from "@angular/core";
import { Status } from "../../Classes/status";
import { ProfessianolService } from "../../servies/professianol.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  NgForm,
  FormControl,
  AbstractControl,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../../servies/users.service";
import { User } from "../../Classes/user";
import Swal from "sweetalert2";

@Component({
  selector: "app-n-professional",
  templateUrl: "./n-professional.component.html",
  styleUrls: ["./n-professional.component.css"],
})
export class NProfessionalComponent implements OnInit {
  statusList: Array<Status> = [];
  answer: boolean;
  formProfessianol: FormGroup;
  myGroup: FormGroup;
  newProfessional: User;
  constructor(
    private professionalSer: ProfessianolService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userSer: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.initForm(localStorage.getItem("name"), localStorage.getItem("password"));
    });
    this.getStatus();
  }

  initForm(name: string, password: string) {
    this.formProfessianol = this.fb.group({
      EntringName: [null, Validators.required],
      Password: [null, Validators.required],
      passwordAuthentication: [null, Validators.required],
      FirstName: [null, Validators.required],
      LastName: [
        null,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      Mail: [null, Validators.compose([Validators.email, Validators.required])],
      Mobile: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.pattern("^[0-9]*$"),
        ]),
      ],
      status: [null, Validators.required],
      price: [null, Validators.required],
    });
    this.updatePasswordAndName(name, password);
  }

  updatePasswordAndName(name: string, password: string) {
    this.formProfessianol.get("EntringName").setValue(name);
    this.formProfessianol.get("Password").setValue(password);
  }

  getStatus() {
    this.professionalSer.getListOfStatus().subscribe(
      (list) => {
        this.statusList = list;
      },
      (err) => console.log(err)
    );
  }

  onSubmit() {
    this.newProfessional = this.formProfessianol.value;
    this.userSer
      .singularPassword(this.formProfessianol.get("Password").value)
      .subscribe(
        (answer) => {
          this.answer = answer;
          if (this.answer == false) {
            Swal.fire(
              "Ooops",
              "הסיסמא קיימת במערכת ,נא הזן סיסמא חדשה",
              "error"
            );
          } else {
            this.professionalSer
              .addProfessional(
                this.newProfessional,
                this.formProfessianol.get("status").value,
                this.formProfessianol.get("price").value
              )
              .subscribe(
                (answer) => {
                  this.answer = answer;
                  if (answer == true) {
                    Swal.fire("", "!פרטיך נקלטו במערכת", "success");
                    localStorage.setItem(
                      "name",
                      this.formProfessianol.get("EntringName").value
                    );
                    localStorage.setItem(
                      "password",
                      this.formProfessianol.get("Password").value
                    );
                    this.router.navigate(["/diamond-of-professional"]);
                  } else Swal.fire("Ooops", "ההרשמה נכשלה", "error");
                },
                (err) => console.log(err)
              );
          }
        },
        (err) => console.log(err)
      );
  }
}

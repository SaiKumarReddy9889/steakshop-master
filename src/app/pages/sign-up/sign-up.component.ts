import { Component, OnInit, Input } from "@angular/core";
import { Profile } from "../../entities/profile";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  @Input()
  profile: Profile;
  signupForm: FormGroup;
  title: string = "Create An Account";
  titleAlert: string = "This field is required";
  getErrorEmail: string = "Field is required";
  getErrorMobile: string =
    "Required field, must be between 10 and 15 characters.";
  getErrorPassword: string =
    "Field is required (at least eight characters, one uppercase letter and one number)";

  constructor(private formBuilder: FormBuilder) {
    this.profile = new Profile();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(emailregex)]],
      name: [null, Validators.required],
      password: [null, [Validators.required, this.checkPassword]],
      mobile: [
        null,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
        ]
      ],
      validate: ""
    });
  }

  get name() {
    return this.signupForm.get("name") as FormControl;
  }

  checkPassword(control) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return !passwordCheck.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }

  // getErrorEmail() {
  //   return this.signupForm.get("email").hasError("required")
  //     ? "Field is required"
  //     : this.signupForm.get("email").hasError("pattern")
  //     ? "Not a valid emailaddress"
  //     : this.signupForm.get("email").hasError("alreadyInUse")
  //     ? "This emailaddress is already in use"
  //     : "";
  // }

  // getErrorPassword() {
  //   return this.signupForm.get("password").hasError("required")
  //     ? "Field is required (at least eight characters, one uppercase letter and one number)"
  //     : this.signupForm.get("password").hasError("requirements")
  //     ? "Password needs to be at least eight characters, one uppercase letter and one number"
  //     : "";
  // }

  onSubmit(profile: any) {
    this.profile = profile;
    console.log(profile);
  }
}

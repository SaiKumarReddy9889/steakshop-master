import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-reservation-form",
  templateUrl: "./reservation-form.component.html",
  styleUrls: ["./reservation-form.component.css"]
})
export class ReservationFormComponent implements OnInit {
  peoples: any[] = [
    { value: "people-1", viewValue: "Number Of People" },
    { value: "people-2", viewValue: "Number Of People" },
    { value: "people-3", viewValue: "Number Of People" },
    { value: "people-4", viewValue: "Number Of People" },
    { value: "people-5", viewValue: "Number Of People" }
  ];
  events: any[] = [
    { value: "event-1", viewValue: "Select Event" },
    { value: "event-2", viewValue: "Select Event Dhaka" },
    { value: "event-3", viewValue: "Select Event Delhi" },
    { value: "event-4", viewValue: "Select Event Newyork" },
    { value: "event-5", viewValue: "Select Event Islamabad" }
  ];
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  // nameFormControl = new FormControl("", [Validators.required, Validators.name]);
  matcher = new MyErrorStateMatcher();
  constructor() {}

  ngOnInit() {}
}

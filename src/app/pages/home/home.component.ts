import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  imparent: string = "Hi I M Sai";

  public message = " Hi Sai";

  constructor() {}

  ngOnInit() {}
}

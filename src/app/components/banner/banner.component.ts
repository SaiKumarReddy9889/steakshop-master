import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"]
})
export class BannerComponent implements OnInit {
  isEnter: boolean = false;
  isLeave: boolean = true;
  constructor() {}

  ngOnInit() {}
  enter() {
    this.isEnter = true;
    this.isLeave = false;
  }
  leave() {
    this.isLeave = true;
    this.isEnter = false;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-diamond",
  templateUrl: "./diamond.component.html",
  styleUrls: ["./diamond.component.css"]
})
export class DiamondComponent implements OnInit {
  image: any = {
    img: "../../../assets/img/food3.jpg"
  };

  @Input()
  imchild: string;

  @Output()
  public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  fireEvent() {
    this.childEvent.emit(this.image.img);
  }
}

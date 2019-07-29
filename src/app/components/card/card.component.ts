import { Component, OnInit, Input } from "@angular/core";
import { Card } from "src/app/models/Card";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.sass"]
})
export class CardComponent implements OnInit {
  @Input() cardInfo: Card;

  // image source. Placeholder image
  imgSrc: string =
    "https://www.viajanet.com.br/static/assets/platform/img/catalog/RIO/Rio-motor.jpg";

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";
import { Card } from "../../models/Card";

@Component({
  selector: "app-main-cards",
  templateUrl: "./main-cards.component.html",
  styleUrls: ["./main-cards.component.sass"]
})
export class MainCardsComponent implements OnInit {
  // this would be swapped for a db call to fetch data
  cards: Card[] = [
    {
      from: "Recife",
      to: "Vitória",
      departDate: "10 set",
      returnDate: "13 set",
      price: 620
    },
    {
      from: "São Paulo",
      to: "Foz do Iguaçu",
      departDate: "25 ago",
      returnDate: "28 ago",
      price: 404
    },
    {
      from: "Curitiba",
      to: "Belo Horizonte",
      departDate: "29 ago",
      returnDate: "01 set",
      price: 403
    },
    {
      from: "Maceió",
      to: "Porto Alegre",
      departDate: "22 out",
      returnDate: "25 out",
      price: 847
    }
  ];

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.sass"]
})
export class FooterComponent implements OnInit {
  email: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    alert(`${this.email} registrado!`);
    this.email = "";
  }
}

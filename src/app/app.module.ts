import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { MainFormComponent } from './components/main-form/main-form.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MainFormComponent, MainCardsComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PassengerDashboardModule } from "./modules/passenger-dashboard/passenger-dashboard.module";
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,

    //custom modules
    AppRoutingModule,
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
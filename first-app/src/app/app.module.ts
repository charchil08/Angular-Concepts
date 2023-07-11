import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { EventDemoComponent } from './component/event-demo/event-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDemoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
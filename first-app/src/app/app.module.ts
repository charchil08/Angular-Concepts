import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { EventDemoComponent } from './component/event-demo/event-demo.component';
import { FormsModule } from "@angular/forms";
import { NgTemplateDemoComponent } from './component/ng-template-demo/ng-template-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDemoComponent,
    NgTemplateDemoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
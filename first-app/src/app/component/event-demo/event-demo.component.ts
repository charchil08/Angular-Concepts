import { Component } from '@angular/core';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.scss']
})
export class EventDemoComponent {
  public name: string;
  public refName: string;

  constructor() {
    this.name = 'Angular';
    this.refName = '';
  }

  handleClick(event: any): void {
    console.log(event);
    this.name = "Satish";
  }
  handleRefClick(refNameValue: string): void {
    console.log(refNameValue);
    this.refName = refNameValue;
  }
}

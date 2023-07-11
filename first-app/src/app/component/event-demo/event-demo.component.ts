import { Component } from '@angular/core';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.scss']
})
export class EventDemoComponent {
  public name: string;

  constructor() {
    this.name = 'Angular';
  }

  handleClick(event: any): void {
    console.log(event);
    this.name = "Satish";
  }

}

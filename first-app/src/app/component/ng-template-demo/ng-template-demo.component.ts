import { Component } from '@angular/core';

interface IPassenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}

@Component({
  selector: 'app-ng-template-demo',
  templateUrl: './ng-template-demo.component.html',
  styleUrls: ['./ng-template-demo.component.scss']
})
export class NgTemplateDemoComponent {
  public searchQuery: string;
  public passengers: IPassenger[];
  constructor() {
    this.searchQuery = '';
    this.passengers = [
      {
        id: 1,
        fullname: 'Charchil Kajaliya',
        checkedIn: true
      },
      {
        id: 2,
        fullname: 'Rahul Kajaliya',
        checkedIn: false
      },
      {
        id: 3,
        fullname: 'Raj Kajaliya',
        checkedIn: true
      },
      {
        id: 4,
        fullname: 'Ravi Kajaliya',
        checkedIn: false
      },
      {
        id: 5,
        fullname: 'Rajesh Kajaliya',
        checkedIn: true
      },
      {
        id: 6,
        fullname: 'Rakesh Kajaliya',
        checkedIn: false
      },
    ]
  }

  handleChange(event: any): void {
    this.searchQuery = event.target.value;
  }
}

import { Component } from '@angular/core';

interface IPassenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkedInDate: number | null;
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
        checkedIn: true,
        checkedInDate: 1490742000000
      },
      {
        id: 2,
        fullname: 'Rahul Kajaliya',
        checkedIn: false,
        checkedInDate: null
      },
      {
        id: 3,
        fullname: 'Raj Kajaliya',
        checkedIn: true,
        checkedInDate: 1490742990000
      },
      {
        id: 4,
        fullname: 'Ravi Kajaliya',
        checkedIn: false,
        checkedInDate: null
      },
      {
        id: 5,
        fullname: 'Rajesh Kajaliya',
        checkedIn: true,
        checkedInDate: 1490742990000
      },
      {
        id: 6,
        fullname: 'Rakesh Kajaliya',
        checkedIn: false,
        checkedInDate: null
      },
    ]
  }

  handleChange(event: any): void {
    this.searchQuery = event.target.value;
  }
}

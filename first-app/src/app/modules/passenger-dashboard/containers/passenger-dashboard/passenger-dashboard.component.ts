import { Component, OnInit } from '@angular/core';
import { IPassenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
})

export class PassengerDashboardComponent implements OnInit {
    public passengers!: IPassenger[];

    constructor() { }

    ngOnInit(): void {
        console.log('ngOnInit');
        this.passengers = [
            {
                id: 1,
                fullname: 'Charchil Kajaliya',
                checkedIn: true,
                checkedInDate: 1490742000000,
                children: [{ name: 'Khushi', age: 10 }]
            },
            {
                id: 2,
                fullname: 'Rahul Kajaliya',
                checkedIn: false,
                checkedInDate: null,
                children: [{ name: 'Jani', age: 10 }]
            },
            {
                id: 3,
                fullname: 'Raj Kajaliya',
                checkedIn: true,
                checkedInDate: 1490742990000,
                children: null
            },
            {
                id: 4,
                fullname: 'Ravi Kajaliya',
                checkedIn: false,
                checkedInDate: null,
                children: [{ name: 'Raj', age: 10 }, { name: 'Ronit', age: 10 }]
            },
            {
                id: 5,
                fullname: 'Rajesh Kajaliya',
                checkedIn: true,
                checkedInDate: 1490742990000,
                children: null
            },
            {
                id: 6,
                fullname: 'Rakesh Kajaliya',
                checkedIn: false,
                checkedInDate: null,
                children: [{ name: 'Raj', age: 10 }, { name: 'Ronit', age: 10 }, { name: 'Rahul', age: 10 }, { name: 'Ravi', age: 10 }]
            },
        ]
    }

    handleEdit(event: any): void {
        console.log(event);
    }

    handleRemove(event: any): void {
        console.log(event);
    }
}
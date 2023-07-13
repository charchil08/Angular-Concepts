import { Component, OnInit } from '@angular/core';
import { IPassenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
})

export class PassengerDashboardComponent implements OnInit {
    public passengers!: IPassenger[];

    constructor(private _service: PassengerDashboardService) { }

    ngOnInit(): void {
        console.log('ngOnInit');
        this._getList();
    }

    private _getList() {
        this._service.getList().subscribe((data: IPassenger[]) => {
            this.passengers = data;
        })
    };

    handleById(id: number): void {
        debugger;
        this._service.getById(id).subscribe((data: IPassenger) => {
            console.log(data);
        });
    }

    handleEdit(event: IPassenger): void {
        this._service.update(event).subscribe((data: IPassenger) => {
            this.passengers = this.passengers.map((passenger: IPassenger) => {
                if (passenger.id === event.id) {
                    passenger = Object.assign({}, passenger, event);
                }
                return passenger;
            });
        });
    }

    handleRemove(event: IPassenger) {
        this._service.delete(event.id)
            .subscribe((data: Object) => {
                this._getList();
            });
    }
}
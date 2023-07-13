import { Component, OnInit } from '@angular/core';
import { IPassenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {

  passenger!: IPassenger;

  constructor(private _service: PassengerDashboardService) { }

  ngOnInit(): void {
    this._service
      .getById(1)
      .subscribe((data: IPassenger) => this.passenger = data);
  }

}

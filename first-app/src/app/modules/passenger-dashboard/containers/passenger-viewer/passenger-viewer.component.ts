import { Component, OnInit } from '@angular/core';
import { IPassenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {

  passenger!: IPassenger;

  constructor(private _service: PassengerDashboardService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params
      .pipe(
        switchMap((data: Params) => this._service.getById(+data['id']))
      )
      .subscribe((data: IPassenger) => this.passenger = data);
  }

  onUpdate(event: IPassenger): void {
    this._service
      .update(event)
      .subscribe((data: IPassenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      });
  }

}

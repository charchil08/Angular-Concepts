import { Injectable } from '@angular/core';
import { IPassenger } from '../models/passenger.interface';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from '../constants/api.constants';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PassengerDashboardService {

  constructor(private _http: HttpClient) { }

  getList(): Observable<IPassenger[]> {
    return this._http
      .get<IPassenger[]>(ApiConstants.PASSENGER_API)
      .pipe(map((response: IPassenger[]) => response));
  }
}

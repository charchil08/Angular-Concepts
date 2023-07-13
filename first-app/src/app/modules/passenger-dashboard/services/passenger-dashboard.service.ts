import { Injectable } from '@angular/core';
import { IPassenger } from '../models/passenger.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConstants } from '../constants/api.constants';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PassengerDashboardService {

  constructor(private _httpClient: HttpClient) { }

  getById(id: number): Observable<IPassenger> {

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'x-api-key': '1234567890'
    });

    const options: Object = {
      headers: headers
    };

    return this._httpClient
      .get<IPassenger>(`${ApiConstants.PASSENGER_API}/${id}`, options);
  }

  getList(): Observable<IPassenger[]> {
    return this._httpClient
      .get<IPassenger[]>(ApiConstants.PASSENGER_API);
  }

  update(passenger: IPassenger): Observable<IPassenger> {
    return this._httpClient
      .put<IPassenger>(`${ApiConstants.PASSENGER_API}/${passenger.id}`, passenger);
  }

  delete(id: number): Observable<Object> {
    const url: string = `${ApiConstants.PASSENGER_API}/${id}`;
    return this._httpClient
      .delete(url)
      .pipe(catchError((err: any) => {
        console.error(err);
        return throwError(() => err);
      }));
  }
}
import { Component, Input } from '@angular/core';
import { IPassenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})



export class PassengerDetailComponent {
  @Input() detail: IPassenger = {} as IPassenger;
}

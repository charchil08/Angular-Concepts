import { Component, Input } from '@angular/core';
import { IPassenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent {
  @Input() items: IPassenger[] = []; // this is the input property

  checkedInCount(): number {
    return this.items.filter((passenger: IPassenger) => passenger.checkedIn).length;
  }
}

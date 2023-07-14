import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPassenger } from '../../models/passenger.interface';
import { IBaggage } from '../../models/baggage.interface';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent {
  @Input() detail!: IPassenger;

  @Output() update: EventEmitter<IPassenger> = new EventEmitter<IPassenger>();

  luggage: IBaggage[] = [{
    key: 'none',
    value: 'No baggage'
  }, {
    key: 'hand-only',
    value: 'Hand baggage'
  }, {
    key: 'hold-only',
    value: 'Hold baggage'
  }, {
    key: 'hand-hold',
    value: 'Hand & Hold baggage'
  }];


  handleCheckIn(isCheckIn: boolean): void {
    this.detail.checkedIn = isCheckIn;
    if (isCheckIn) {
      this.detail.checkedInDate = Date.now();
    }
  }

  handleSubmit(passenger: IPassenger, isValid: boolean): void {
    if (isValid) {
      this.update.emit(passenger);
    }
  }

}

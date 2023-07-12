import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPassenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})



export class PassengerDetailComponent {
  @Input() detail: IPassenger = {} as IPassenger;

  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  handleNameChange(value: string): void {
    this.detail.fullname = value;
    console.log('handleNameChange');
  }

  handleToggleEdit(): void {
    this.editing = !this.editing;
  }

  handleRemove(event: any): void {
    console.log('handleRemove');
  }

}

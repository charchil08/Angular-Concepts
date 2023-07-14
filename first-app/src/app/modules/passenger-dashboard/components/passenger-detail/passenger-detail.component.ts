import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { IPassenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})



export class PassengerDetailComponent implements OnChanges {
  @Input() detail: IPassenger = {} as IPassenger;

  @Output() edit: EventEmitter<IPassenger> = new EventEmitter<IPassenger>();
  @Output() remove: EventEmitter<IPassenger> = new EventEmitter<IPassenger>();
  @Output() view: EventEmitter<number> = new EventEmitter<number>();

  editing: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['detail']) {
      this.detail = { ...changes['detail'].currentValue };
    }
  }

  handleView(): void {
    debugger;
    this.view.emit(this.detail.id);
  }

  handleNameChange(value: string): void {
    this.detail.fullname = value;
  }

  handleToggleEdit(): void {
    this.editing = !this.editing;
    !this.editing && this.edit.emit(this.detail);
  }

  handleRemove(): void {
    this.remove.emit(this.detail);
  }

}

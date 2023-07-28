import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})

export class ProfileFormComponent {
  constructor(private _fb: FormBuilder) { }

  profileForm = this._fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    phone: [''],
    address: this._fb.group({
      street: [''],
      city: ['']
    })
  });
}


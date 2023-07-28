import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileFormRoutingModule } from './profile-form-routing.module';
import { ProfileFormComponent } from './containers/profile-form/profile-form.component';


@NgModule({
  declarations: [
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    ProfileFormRoutingModule
  ]
})
export class ProfileFormModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotUsernameRoutingModule } from './forgot-username-routing.module';
import { ForgotUsernameComponent } from './forgot-username.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ForgotUsernameComponent],
  imports: [
    CommonModule,
    ForgotUsernameRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    IconModule,
    MatIconModule
  ]
})
export class ForgotUsernameModule {
}

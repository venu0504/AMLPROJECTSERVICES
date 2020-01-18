import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnepassProfileRoutingModule } from './onepass-profile-routing.module';
import { OnepassProfileComponent } from './onepass-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IconModule } from '@visurel/iconify-angular';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [OnepassProfileComponent],
  imports: [
    CommonModule,
    OnepassProfileRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    IconModule,
	MatSelectModule
  ]
})
export class OnepassProfileModule {
}

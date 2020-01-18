import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateOneplusProfileRoutingModule } from './update-oneplus-profile-routing.module';
import { UpdateOneplusProfileComponent } from './update-oneplus-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [UpdateOneplusProfileComponent],
  imports: [
    CommonModule,
    UpdateOneplusProfileRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    IconModule
  ]
})
export class UpdateOneplusProfileModule {
}

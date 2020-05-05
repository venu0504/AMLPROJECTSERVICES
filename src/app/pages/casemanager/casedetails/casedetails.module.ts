import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasedetailsRoutingModule } from './casedetails-routing.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CasedetailsRoutingModule,
	MatCardModule
  ]
})
export class CasedetailsModule {
}

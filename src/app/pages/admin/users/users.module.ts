import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SecondaryToolbarModule } from '../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatSelectModule } from '@angular/material/select';
import { IconModule } from '@visurel/iconify-angular';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { ColorFadeModule } from '../../../../@vex/pipes/color/color-fade.module';
import { MatTabsModule } from '@angular/material/tabs';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';

import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatDialogModule } from '@angular/material/dialog';

import { HelpCenterGuidesModule } from '../../apps/help-center/help-center-guides/help-center-guides.module';
import { HighlightModule } from '../../../../@vex/components/highlight/highlight.module';
@NgModule({
  declarations: [UsersComponent],
  imports: [
      MatListModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    CommonModule,
    UsersRoutingModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatStepperModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    SecondaryToolbarModule,
    MatSelectModule,
    IconModule,
	    MatTabsModule,
    BreadcrumbsModule,
    ContainerModule,
	  MatDatepickerModule,
	  MatNativeDateModule,
	   MatAutocompleteModule,
	    MatRadioModule,
		MatSlideToggleModule,
		PageLayoutModule,
    ColorFadeModule,
	MatExpansionModule,
	    MatDialogModule,
    HelpCenterGuidesModule,
	
	HighlightModule
  ]
})
export class UsersModule {
}

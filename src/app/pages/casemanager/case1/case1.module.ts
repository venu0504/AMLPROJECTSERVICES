import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { MatSelectModule } from '@angular/material/select';
import { ColorFadeModule } from '../../../../@vex/pipes/color/color-fade.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Case1Component } from './case1.component';
import { Case1RoutingModule } from './case1-routing.module';


import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatStepperModule } from '@angular/material/stepper';

import { MatInputModule } from '@angular/material/input';

import { SecondaryToolbarModule } from '../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';

import { MatTabsModule } from '@angular/material/tabs';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';

import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import {MatListModule} from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatDialogModule } from '@angular/material/dialog';

import { HelpCenterGuidesModule } from '../../apps/help-center/help-center-guides/help-center-guides.module';
import { HighlightModule } from '../../../../@vex/components/highlight/highlight.module';
@NgModule({
  declarations: [Case1Component],
  imports: [
    CommonModule,
    Case1RoutingModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
 
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
   
   
    MatMenuModule,
  
    FormsModule,
    MatTooltipModule,

  


    MatButtonToggleModule,
	 MatListModule,

    MatCardModule,
    MatGridListModule,
    CommonModule,
 
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatStepperModule,
 
    MatInputModule,
    MatButtonModule,
  
    SecondaryToolbarModule,
    MatSelectModule,
    IconModule,
	    MatTabsModule,
 
    ContainerModule,
	  MatDatepickerModule,
	  MatNativeDateModule,
	   MatAutocompleteModule,
	    MatRadioModule,
		MatSlideToggleModule,
	
    ColorFadeModule,
	MatExpansionModule,
	    MatDialogModule,
    HelpCenterGuidesModule,
	
	HighlightModule
  ]
})
export class Case1Module {
}

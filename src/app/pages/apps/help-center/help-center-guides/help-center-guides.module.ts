import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpCenterGuidesRoutingModule } from './help-center-guides-routing.module';
import { HelpCenterGuidesComponent } from './help-center-guides.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HelpCenterGuidesGuideComponent } from './help-center-guides-guide/help-center-guides-guide.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';


import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../@vex/components/highlight/highlight.module';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [HelpCenterGuidesComponent, HelpCenterGuidesGuideComponent],
  imports: [
    CommonModule,
    HelpCenterGuidesRoutingModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
	    MatInputModule,
 MatTableModule,
  MatCardModule,

    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    ContainerModule,
	   FormsModule,
    MatTabsModule,
    HighlightModule
  ],
  entryComponents: [HelpCenterGuidesGuideComponent]
})
export class HelpCenterGuidesModule {
}

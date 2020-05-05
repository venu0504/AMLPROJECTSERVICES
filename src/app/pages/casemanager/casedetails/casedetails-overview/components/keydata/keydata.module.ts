import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeydataComponent } from './keydata.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { IconModule } from '@visurel/iconify-angular';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SecondaryToolbarModule } from '../../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from '../../../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from '../../../../../../../@vex/directives/container/container.module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [KeydataComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTabsModule,
    ReactiveFormsModule,
    HighlightModule,
    IconModule,
	 MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
   MatCardModule,
   MatTableModule,
   MatListModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    ContainerModule
  ],
  exports: [KeydataComponent]
})
export class KeydataModule {
}

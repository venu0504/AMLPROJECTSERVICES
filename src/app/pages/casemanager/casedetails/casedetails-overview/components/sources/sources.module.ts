import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourcesComponent } from './sources.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
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
  declarations: [SourcesComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatGridListModule,
    MatTabsModule,
    HighlightModule,
	 MatInputModule,
    MatIconModule,
    MatButtonModule,
    IconModule,
	MatCardModule,
	MatTableModule,
	MatListModule,
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
    ContainerModule
  ],
  exports: [SourcesComponent]
})
export class SourcesModule {
}

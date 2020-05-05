import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnspecifiedComponent } from './unspecified.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
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

@NgModule({
  declarations: [UnspecifiedComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    HighlightModule,
    MatButtonModule,
    IconModule,
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
  exports: [UnspecifiedComponent]
})
export class UnspecifiedModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasedetailsOverviewRoutingModule } from './casedetails-overview-routing.module';
import { CasedetailsOverviewComponent } from './casedetails-overview.component';
import { MatListModule } from '@angular/material/list';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatRippleModule } from '@angular/material/core';

import { KeydataModule } from './components/keydata/keydata.module';
import { SourcesModule } from './components/sources/sources.module';
import { KeywordsModule } from './components/keywords/keywords.module';
import { ConnectionsModule } from './components/connections/connections.module';
import { FurtherinformationModule } from './components/furtherinformation/furtherinformation.module';


import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

import { HighlightModule } from '../../../../../@vex/components/highlight/highlight.module';
import { MatMenuModule } from '@angular/material/menu';





@NgModule({
  declarations: [CasedetailsOverviewComponent],
  imports: [
    CommonModule,
    CasedetailsOverviewRoutingModule,
    MatListModule,
    PageLayoutModule,
    FlexLayoutModule,
    SecondaryToolbarModule,
    MatRippleModule,
    KeydataModule,
	
SourcesModule,
KeywordsModule,
ConnectionsModule,
FurtherinformationModule,
MatCardModule,
MatTableModule,
  MatGridListModule,
    BreadcrumbsModule,
    ContainerModule,
	MatSelectModule,
	MatInputModule,
	  ReactiveFormsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
	MatTabsModule,
    MatExpansionModule,
  MatDialogModule,

 HighlightModule,
     MatMenuModule
    
  ]
})
export class CasedetailsOverviewModule {
}

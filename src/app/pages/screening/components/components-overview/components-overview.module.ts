import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsOverviewRoutingModule } from './components-overview-routing.module';
import { ComponentsOverviewComponent } from './components-overview.component';
import { MatListModule } from '@angular/material/list';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatRippleModule } from '@angular/material/core';

import { SingleModule } from './components/single/single.module';
import { VesselModule } from './components/vessel/vessel.module';
import { BatchModule } from './components/batch/batch.module';
import { IndividualModule } from './components/individual/individual.module';
import { OrganizationModule } from './components/organization/organization.module';
import { PassportcheckModule } from './components/passport-check/passport-check.module';
import { UnspecifiedModule } from './components/unspecified/unspecified.module';

import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ComponentsOverviewSVC } from './components-overview.service';

@NgModule({
  declarations: [ComponentsOverviewComponent],
  imports: [
    CommonModule,
    ComponentsOverviewRoutingModule,
    MatListModule,
    PageLayoutModule,
    FlexLayoutModule,
    SecondaryToolbarModule,
    MatRippleModule,
    SingleModule,
	VesselModule,
	BatchModule,
	IndividualModule,
	OrganizationModule,
	PassportcheckModule,
	UnspecifiedModule,
  
    BreadcrumbsModule,
    ContainerModule,
	MatSelectModule,
	MatInputModule
  ],
  providers:[ComponentsOverviewSVC]
})
export class ComponentsOverviewModule {
}

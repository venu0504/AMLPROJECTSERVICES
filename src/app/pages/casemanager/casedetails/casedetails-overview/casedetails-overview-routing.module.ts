import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CasedetailsOverviewComponent } from './casedetails-overview.component';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: CasedetailsOverviewComponent,
    data: {
      toolbarShadowEnabled: true,
      containerEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasedetailsOverviewRoutingModule {
}

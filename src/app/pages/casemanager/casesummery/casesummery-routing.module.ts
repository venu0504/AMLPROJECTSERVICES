import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesummeryComponent } from './casesummery.component';


const routes: Routes = [
  {
    path: '',
    component: CasesummeryComponent,
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
export class CasesummeryRoutingModule {
}

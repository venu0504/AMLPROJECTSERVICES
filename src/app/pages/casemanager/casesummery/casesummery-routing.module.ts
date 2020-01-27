import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesummeryComponent } from './casesummery.component';


const routes: Routes = [
  {
    path: '',
    component: CasesummeryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesummeryRoutingModule {
}

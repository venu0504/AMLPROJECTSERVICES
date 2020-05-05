import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreeningstatusComponent } from './screening-status.component';


const routes: Routes = [
  {
    path: '',
    component: ScreeningstatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreeningstatusRoutingModule {
}

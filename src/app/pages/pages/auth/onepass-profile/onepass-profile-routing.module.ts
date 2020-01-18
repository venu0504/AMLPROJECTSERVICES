import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnepassProfileComponent } from './onepass-profile.component';


const routes: Routes = [
  {
    path: '',
    component: OnepassProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnepassProfileRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateOneplusProfileComponent } from './update-oneplus-profile.component';


const routes: Routes = [
  {
    path: '',
    component: UpdateOneplusProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateOneplusProfileRoutingModule {
}

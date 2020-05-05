import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseauditComponent } from './caseaudit.component';


const routes: Routes = [
  {
    path: '',
    component: CaseauditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseauditRoutingModule {
}

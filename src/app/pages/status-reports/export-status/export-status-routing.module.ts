import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportstatusComponent } from './export-status.component';


const routes: Routes = [
  {
    path: '',
    component: ExportstatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportstatusRoutingModule {
}

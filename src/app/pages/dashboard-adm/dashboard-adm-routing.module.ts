import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdmComponent } from './dashboard-adm.component';

const routes: Routes = [{ path: '', component: DashboardAdmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdmRoutingModule { }

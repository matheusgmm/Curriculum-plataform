import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAlunoComponent } from './dashboard-aluno.component';

const routes: Routes = [{ path: '', component: DashboardAlunoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAlunoRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeafDetailComponent } from '../app/leaf-detail/leaf-detail.component'
import { DashboardComponent } from '../app/dashboard/dashboard.component'

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: LeafDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

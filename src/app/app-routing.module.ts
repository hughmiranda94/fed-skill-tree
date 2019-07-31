import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LeafDetailComponent } from '../app/leaf-detail/leaf-detail.component'
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { LandingPageComponent } from '../app/landing-page/landing-page.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home', component: LandingPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: 'detail/:id', component: LeafDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

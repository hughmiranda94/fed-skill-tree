import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../app/landing-page/landing-page.component';
import { SkillsTreeComponent } from '../app/skills-tree/skills-tree.component';

const routes: Routes = [
  {path: 'home', component: LandingPageComponent},
  {path: 'tree', component: SkillsTreeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

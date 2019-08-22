import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../app/landing-page/landing-page.component';
import { SkillsTreeComponent } from '../app/skills-tree/skills-tree.component';
import { AdminComponent } from './admin/admin.component';
import { AdminTableComponent } from './admin/admin-table/admin-table.component';
import { AdminCrudComponent } from './admin/admin-crud/admin-crud.component';
import { TypeDataResolverService, TechnologyResolverService, TopicResolverService, ReferenceResolverService } from './resolvers/admin-resolver.service';

const routes: Routes = [
  {path: 'home', component: LandingPageComponent},
  {path: 'tree', component: SkillsTreeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent,
    children: [
      {path: '', redirectTo: ':type/table', pathMatch: 'full'},
      {
        path: ':type/table',
        component: AdminTableComponent,
        resolve: {
          data: TypeDataResolverService       
        }
      },
      {
        path: ':type/create',
        component: AdminCrudComponent,
        resolve: {
          dataTechnology: TechnologyResolverService,
          dataTopic: TopicResolverService,
          dataReference: ReferenceResolverService,
          type: TypeDataResolverService
        }
      },
      {
        path: ':type/edit/:id',
        component: AdminCrudComponent,
        resolve: {
          dataTechnology: TechnologyResolverService,
          dataTopic: TopicResolverService,
          dataReference: ReferenceResolverService,
          type: TypeDataResolverService
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

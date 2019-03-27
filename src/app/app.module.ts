import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './dashboard/tree/tree.component';
import { BranchComponent } from './dashboard/tree/branch/branch.component';
import { LeafComponent } from './dashboard/tree/branch/leaf/leaf.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SeparatorComponent } from './dashboard/tree/branch/separator/separator.component';
import { DetailsComponent } from './dashboard/details/details.component';
import { LeafDetailComponent } from './leaf-detail/leaf-detail.component';
import { ProficiencyLevelComponent } from './leaf-detail/proficiency-level/proficiency-level.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TreeComponent,
    BranchComponent,
    LeafComponent,
    NavBarComponent,
    SeparatorComponent,
    DetailsComponent,
    LeafDetailComponent,
    ProficiencyLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

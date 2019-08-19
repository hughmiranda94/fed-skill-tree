import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './dashboard/tree/tree.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TechnologyBranchComponent } from './dashboard/tree/technology-branch/technology-branch.component';
import { TopicBranchComponent } from './dashboard/tree/technology-branch/topic-branch/topic-branch.component';
import { DetailsComponent } from './dashboard/details/details.component';
import { SubtopicBranchComponent } from './dashboard/tree/technology-branch/topic-branch/subtopic-branch/subtopic-branch.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SkillCardComponent } from './common-components/skill-card/skill-card.component';
import { TechnologyContentComponent } from './landing-page/technology-content/technology-content.component';
import { HeaderComponent } from './common-components/header/header.component';
import { SkillsTreeComponent } from './skills-tree/skills-tree.component';
import { SkillContentDialogComponent } from './common-components/skill-content-dialog/skill-content-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent,
    TreeComponent,
    NavBarComponent,
    TechnologyBranchComponent,
    TopicBranchComponent,
    SubtopicBranchComponent,
    LandingPageComponent,
    SkillCardComponent,
    TechnologyContentComponent,
    HeaderComponent,
    SkillsTreeComponent,
    SkillContentDialogComponent
  ],
  entryComponents:[SkillContentDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SkillCardComponent } from './common-components/skill-card/skill-card.component';
import { TechnologyContentComponent } from './landing-page/technology-content/technology-content.component';
import { HeaderComponent } from './common-components/header/header.component';
import { SkillsTreeComponent } from './skills-tree/skills-tree.component';
import { SkillContentDialogComponent } from './common-components/skill-content-dialog/skill-content-dialog.component';
import { MenuComponent } from './common-components/menu/menu.component';
import { DropdownSelectComponent } from './dropdown-select/dropdown-select.component';
import { TagsComponent } from './tags/tags.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ButtonLinkComponent } from './button-link/button-link.component';
import { ButtonFormComponent } from './button-form/button-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SkillCardComponent,
    TechnologyContentComponent,
    HeaderComponent,
    SkillsTreeComponent,
    SkillContentDialogComponent,
    MenuComponent,
    DropdownSelectComponent,
    TagsComponent,
    InputTextComponent,
    ButtonLinkComponent,
    ButtonFormComponent
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

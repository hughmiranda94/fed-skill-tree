import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SkillCardComponent } from './common-components/skill-card/skill-card.component';
import { TechnologyContentComponent } from './landing-page/technology-content/technology-content.component';
import { HeaderComponent } from './common-components/header/header.component';
import { SkillsTreeComponent } from './skills-tree/skills-tree.component';
import { SkillContentDialogComponent } from './common-components/skill-content-dialog/skill-content-dialog.component';
import { MenuComponent } from './common-components/menu/menu.component';
import { DropdownSelectComponent } from './admin/dropdown-select/dropdown-select.component';
import { TagsComponent } from './admin/tags/tags.component';
import { InputTextComponent } from './admin/input-text/input-text.component';
import { ButtonLinkComponent } from './admin/button-link/button-link.component';
import { ButtonFormComponent } from './admin/button-form/button-form.component';
import { AdminComponent } from './admin/admin.component';
import { AdminTableComponent } from './admin/admin-table/admin-table.component';
import { AdminCrudComponent } from './admin/admin-crud/admin-crud.component';
import { TableDataComponent } from './admin/table/table.component';

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
    ButtonFormComponent,
    AdminComponent,
    AdminTableComponent,
    AdminCrudComponent,
    TableDataComponent
  ],
  entryComponents:[SkillContentDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

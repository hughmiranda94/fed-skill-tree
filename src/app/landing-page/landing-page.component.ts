import { Component, OnInit } from '@angular/core';
import { SkillsDataService } from '../services/skills-data.service';
import { SkillContentDialogComponent } from '../common-components/skill-content-dialog/skill-content-dialog.component';
import { UserDataService } from '../services/user-data.service';
import { SettingsService } from '../services/settings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public isNightMode$: Observable<boolean>;

  constructor(
    public skillsData: SkillsDataService,
    private userData: UserDataService,
    private settingsService: SettingsService
    ) {
      this.isNightMode$ = this.settingsService.isNightMode();
    }

  technologies;
  selectedTechnology;

  headerInfo = {
    pageTitle : 'Frontend Road Map',
    username : 'José Ángel Parga Cruz',
    isAdmin: false,
    searchInput: true
  };

  ngOnInit() {
    this.technologies = this.skillsData.getTechnologies();
    this.headerInfo.username = this.userData.getUserData().name;
    this.headerInfo.isAdmin = this.userData.getUserData().isAdmin;
  }

  onSelectTechnology(technology) {
    console.log(technology);
    if (!this.selectedTechnology || technology.id !== this.selectedTechnology.id) {
      this.selectedTechnology = technology ? this.skillsData.getTechnologyById(technology.id) : {};
      this.technologies = this.skillsData.getTechnologies();
      this.selectedTechnology = this.skillsData.getTechnologyById(technology.id);

    } else {
      this.selectedTechnology = undefined;
    }

  }

  openDialog() {
    // const dialogRef = this.dialog.open(SkillContentDialogComponent)

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}

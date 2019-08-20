import { Component, OnInit } from '@angular/core';
import { SkillsDataService } from '../skills-data.service';
import { SettingsService } from '../settings.service';
import { Observable } from 'rxjs';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-skills-tree',
  templateUrl: './skills-tree.component.html',
  styleUrls: ['./skills-tree.component.scss']
})
export class SkillsTreeComponent implements OnInit {
  public headerInfo = {
    pageTitle: 'Frontend Road Map',
    username: 'José Ángel Parga Cruz',
    searchInput: false,
    isAdmin: true
  };
  technologies;

  public isNightMode$: Observable<boolean>;

  constructor(private skillsData: SkillsDataService, private settingsService: SettingsService, private userData: UserDataService) {
    this.isNightMode$ = this.settingsService.isNightMode();
    this.headerInfo.username = this.userData.getUserData().name;
    this.headerInfo.isAdmin = this.userData.getUserData().isAdmin;
    this.headerInfo.searchInput = false;
   }

  ngOnInit() {
    this.technologies = this.skillsData.getTechnologies();

  }

}

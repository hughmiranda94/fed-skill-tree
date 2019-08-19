import { Component, OnInit } from '@angular/core';
import { SkillCardService } from '../skill-card.service';
import { SkillsDataService } from '../skills-data.service';
import { UserDataService } from '../user-data.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private skillsData: SkillsDataService,
    private userData: UserDataService,
    private menuService: MenuService
    ) { }

  technologies;
  selectedTechnology;

  headerInfo = {
    pageTitle : 'Frontend Road Map',
    username : 'José Ángel Parga Cruz',
    isAdmin: false,
    searchInput: true
  };

  ngOnInit() {
    this.technologies= this.skillsData.getTechnologies();
    this.selectedTechnology = this.skillsData.getTechnologyById('01');
    this.headerInfo.username = this.userData.getUserData().name;
    this.headerInfo.isAdmin = this.userData.getUserData().isAdmin;
  }

  onSelectTechnology(id) {
    this.selectedTechnology = this.skillsData.getTechnologyById(id);
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

}

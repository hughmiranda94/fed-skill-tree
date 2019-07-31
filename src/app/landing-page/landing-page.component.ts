import { Component, OnInit } from '@angular/core';
import { SkillCardService } from '../skill-card.service';
import { SkillsDataService } from '../skills-data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private skillsData: SkillsDataService) { }

  technologies;
  selectedTechnology;

  headerInfo = {
    pageTitle : 'Frontend Road Map',
    username : 'José Ángel Parga Cruz',
    searchInput: true
  };

  ngOnInit() {
    this.technologies= this.skillsData.getTechnologies();
    this.selectedTechnology = this.skillsData.getTechnologyById('01');
  }

  onSelectTechnology(id) {
    this.selectedTechnology = this.skillsData.getTechnologyById(id);
  }

}

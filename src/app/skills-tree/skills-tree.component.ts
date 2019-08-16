import { Component, OnInit } from '@angular/core';
import { SkillsDataService } from '../skills-data.service';

@Component({
  selector: 'app-skills-tree',
  templateUrl: './skills-tree.component.html',
  styleUrls: ['./skills-tree.component.scss']
})
export class SkillsTreeComponent implements OnInit {
  headerInfo = {
    pageTitle: 'Frontend Road Map',
    username: 'José Ángel Parga Cruz',
    searchInput: false
  };
  technologies;
  constructor(private skillsData: SkillsDataService) { }

  ngOnInit() {
    this.technologies = this.skillsData.getTechnologies();
  }

}

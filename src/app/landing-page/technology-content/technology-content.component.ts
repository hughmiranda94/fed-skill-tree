import { Component, OnInit, Input } from '@angular/core';
import { SkillsDataService } from 'src/app/services/skills-data.service';

@Component({
  selector: 'app-technology-content',
  templateUrl: './technology-content.component.html',
  styleUrls: ['./technology-content.component.scss']
})
export class TechnologyContentComponent implements OnInit {

  childs;

  @Input() selectedTechnology;

  constructor(private skillsData:SkillsDataService) { }

  ngOnInit() {
    console.log('change');
    this.childs = this.getChildsTechnologies();
  }

  onSelectTechnology(id) {
    console.log(id);
  }

  getChildsTechnologies() {
    return this.selectedTechnology?this.skillsData.getChildsTechnologies(this.selectedTechnology.id):{};
  }

}

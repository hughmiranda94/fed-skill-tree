import { Component, OnInit, Input } from '@angular/core';
import { SkillsDataService } from 'src/app/skills-data.service';

@Component({
  selector: 'app-technology-content',
  templateUrl: './technology-content.component.html',
  styleUrls: ['./technology-content.component.scss']
})
export class TechnologyContentComponent implements OnInit {

  topics;

  @Input() selectedTechnology;

  constructor(private skillsData:SkillsDataService) { }

  ngOnInit() {
    console.log('change');
    this.topics = this.getTopics();
  }

  onSelectTechnology(id) {
    console.log(id);
  }

  getTopics() {
    return this.skillsData.getTopics(this.selectedTechnology.id);
  }

}

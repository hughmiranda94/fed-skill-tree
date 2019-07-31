import { Component, OnInit, Input } from '@angular/core';
import { SkillsDataService } from 'src/app/skills-data.service';

@Component({
  selector: 'app-technology-branch',
  templateUrl: './technology-branch.component.html',
  styleUrls: ['./technology-branch.component.scss']
})
export class TechnologyBranchComponent implements OnInit {

  @Input() technologyBranch;
  topics;

  constructor(private skills : SkillsDataService) { }

  ngOnInit() {
    console.log(this.technologyBranch);
    this.topics = this.skills.getTopics(this.technologyBranch.id);
  }

  getBranchWidth() {
    return((100 / this.skills.getSkills().technologies.length ) + 'vw');
  }

}

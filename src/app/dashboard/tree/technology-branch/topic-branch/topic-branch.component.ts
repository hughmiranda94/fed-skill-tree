import { Component, OnInit, Input } from '@angular/core';
import { SkillsDataService } from 'src/app/skills-data.service';

@Component({
  selector: 'app-topic-branch',
  templateUrl: './topic-branch.component.html',
  styleUrls: ['./topic-branch.component.scss']
})
export class TopicBranchComponent implements OnInit {

  @Input() topicBranch;
  subTopics;
  size = Math.floor(Math.random() * 100) + 50;

  constructor(private skills : SkillsDataService) { }

  ngOnInit() {
    // this.subTopics = this.skills.getSubTopics(this.topicBranch.id);
    console.log(this.subTopics);
  }

  getLeafColor() {
    switch(this.topicBranch.technologyId) {
      case '01':
        return '#f34500';
      case '02':
        return '#0195da';
      case '03':
        return '#f3b200';
      default:
        break;
    }
  }

  getSize() {
    console.log(this.size);
    return this.size + 'px';
  }

}

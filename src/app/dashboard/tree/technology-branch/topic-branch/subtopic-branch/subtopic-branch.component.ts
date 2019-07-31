import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subtopic-branch',
  templateUrl: './subtopic-branch.component.html',
  styleUrls: ['./subtopic-branch.component.scss']
})
export class SubtopicBranchComponent implements OnInit {
  
  @Input() subTopicBranch;

  constructor() { }

  ngOnInit() {
  }

}

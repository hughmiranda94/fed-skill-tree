import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  @Input() branch;
  @Output() emission:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(e) {
    this.emission.emit(e);
  }

  getBranchCompletion(){
    let completedLeaves = this.branch.leaves.filter(leaf => leaf.completed);
    return completedLeaves.length/this.branch.leaves.length;
  }

}

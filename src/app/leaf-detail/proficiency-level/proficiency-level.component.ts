import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-proficiency-level',
  templateUrl: './proficiency-level.component.html',
  styleUrls: ['./proficiency-level.component.scss']
})
export class ProficiencyLevelComponent implements OnInit {

  @Input() level;
  @Output() proficiencyLevel:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setProficiencyLevel(l){
    this.proficiencyLevel.emit(l);
  }

}

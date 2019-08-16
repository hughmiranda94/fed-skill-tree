import { Component, OnInit, Input } from '@angular/core';
import { SkillsDataService } from '../../skills-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerInfo;

  constructor(private skills : SkillsDataService) { }

  handleSearch(element) {
    this.skills.search(element.target.value)
  }

  ngOnInit() {
  }

}

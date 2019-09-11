import { Component, OnInit, Input } from '@angular/core';
import { SkillsDataService } from '../../services/skills-data.service';
import { Observable } from 'rxjs';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerInfo;
  public isNightMode$: Observable<boolean>;

  constructor(private skills : SkillsDataService, private settingsService: SettingsService) {
    this.isNightMode$ = this.settingsService.isNightMode();
   }

  handleSearch(element) {
    this.skills.search(element.target.value);
  }

  ngOnInit() {
  }

}

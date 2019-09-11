import { Component } from '@angular/core';
import { SettingsService } from './services/settings.service';
import { Subject, Observable } from 'rxjs';
import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fed-skill-tree';

  public isNightMode$: Observable<boolean>;

  constructor(private settingsService: SettingsService, private helper: HelperService) {
    this.isNightMode$ = this.settingsService.isNightMode();
  }

  ngOnInit() {
    this.sections  = this.helper.dropdownObjectToArray(this.sections, 'link', 'url')
  }

  sections = [
    {
      link: 'Home',
      url: '/'
    },
    {
      link: 'Technologies',
      url: '../admin/technologies/table'
    },
    {
      link: 'Topics',
      url: '../admin/topics/table'
    },
    {
      link: 'References',
      url: '../admin/references/table'
    }
  ]

}

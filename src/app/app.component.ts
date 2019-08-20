import { Component } from '@angular/core';
import { SettingsService } from './settings.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fed-skill-tree';

  public isNightMode$: Observable<boolean>;

  constructor(private settingsService: SettingsService) {
    this.isNightMode$ = this.settingsService.isNightMode();
  }

}

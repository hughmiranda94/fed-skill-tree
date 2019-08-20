import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from 'src/app/settings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skillCardInfo;
  @Input() selectedCard;
  public isNightMode$: Observable<boolean>;

  constructor(private settingsService: SettingsService) {
    this.isNightMode$ = this.settingsService.isNightMode();
   }

  ngOnInit() {
    console.log(this.skillCardInfo.icon);
  }

}

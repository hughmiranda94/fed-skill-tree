import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from 'src/app/settings.service';

@Component({
  selector: 'button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss']
})
export class ButtonLinkComponent implements OnInit {

  @Input() text;
  @Input() link;
  @Input() classButton;
  public isNightMode$: Observable<boolean>;

  constructor(private settingsService: SettingsService) {
    this.isNightMode$ = this.settingsService.isNightMode();
  }

  ngOnInit() {
    this.classButton = this.classButton ? `button-link ${this.classButton}` : `button-link`;
  }

}

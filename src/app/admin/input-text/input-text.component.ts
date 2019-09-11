import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() label
  @Input() id
  @Input() topics
  @Input() disabledText

  @Input() inputText
  @Output() inputTextChange = new EventEmitter();

  public isNightMode$: Observable<boolean>;

  constructor(private settingsService: SettingsService) {
    this.isNightMode$ = this.settingsService.isNightMode();
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() list
  @Input() editList
  @Input() tagClass

  @Output() listChange = new EventEmitter();

  public isNightMode$: Observable<boolean>;


  constructor(private settingsService: SettingsService) {
    this.isNightMode$ = this.settingsService.isNightMode();
  }

  ngOnInit() {
    this.tagClass = this.tagClass? `${this.tagClass} tags-container` : 'tags-container'
  }

  tagDiscard(index, $event) {
    if($event.clientX !== 0) {
      this.list.splice(index, 1)
      this.listChange.emit(this.list)
    }
  }

}

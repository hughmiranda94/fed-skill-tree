import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() list
  @Input() editList
  @Input() tagClass

  @Output() listChange = new EventEmitter()


  constructor() { }

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

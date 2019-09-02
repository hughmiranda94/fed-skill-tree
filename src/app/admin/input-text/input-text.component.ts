import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-form',
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.scss']
})
export class ButtonFormComponent implements OnInit {
  @Input() btnClass
  @Input() text

  @Output() actionButton:EventEmitter<Object> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  action() {
    this.actionButton.emit();

  }

}

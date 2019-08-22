import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss']
})
export class ButtonLinkComponent implements OnInit {

  @Input() text;
  @Input() link;
  @Input() classButton;

  constructor() { }

  ngOnInit() {
    this.classButton = this.classButton? `button-linck ${this.classButton}` : `button-linck`
  }

}

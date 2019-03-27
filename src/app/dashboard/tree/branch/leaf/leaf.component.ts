import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-leaf',
  templateUrl: './leaf.component.html',
  styleUrls: ['./leaf.component.scss']
})
export class LeafComponent implements OnInit {

  @Input() leafInfo;

  constructor() { }

  ngOnInit() {
  }


}

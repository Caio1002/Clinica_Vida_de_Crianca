import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Output() emitter = new EventEmitter();

  @Input() title = '';
  @Input() subtitle = '';
  @Input() text = '';

  constructor() { }

  ngOnInit() {}

}

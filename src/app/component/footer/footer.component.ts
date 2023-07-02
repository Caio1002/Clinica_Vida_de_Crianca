import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  @Output() emitter = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}

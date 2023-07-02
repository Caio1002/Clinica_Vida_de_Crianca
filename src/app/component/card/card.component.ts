import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Clipboard, WriteOptions} from "@capacitor/clipboard"

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  textoo:string="Caio Rodrigues - Dia 21 - 15h"

  @Output() emitter = new EventEmitter();

  @Input() title = '';
  @Input() subtitle = '';
  @Input() text = '';

  constructor() { }

  ngOnInit() {}

  copiar(){
    var options:WriteOptions = {
      string:this.textoo
    }
    Clipboard.write(options).then(()=>{
      alert("Card copiado!");
    })
  }

}

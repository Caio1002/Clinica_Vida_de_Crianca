import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agend-consulta',
  templateUrl: './agend-consulta.page.html',
  styleUrls: ['./agend-consulta.page.scss'],
})
export class AgendConsultaPage implements OnInit {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }

  move(toPage: string): void {
    this.nav.navigateForward(toPage);
  }

}

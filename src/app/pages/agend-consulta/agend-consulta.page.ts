import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Consulta } from 'src/app/class/Consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-agend-consulta',
  templateUrl: './agend-consulta.page.html',
  styleUrls: ['./agend-consulta.page.scss'],
})
export class AgendConsultaPage implements OnInit {

  consulta: Consulta = new Consulta();

  lista = []

  constructor(
    private nav: NavController, 
    
    private consultaService: ConsultaService
    ) {

  }

  ngOnInit() {
    const aux:any = localStorage.getItem('consultas')
    this.lista = aux ? JSON.parse(aux) : [];
  }

  save(){
    this.consultaService.save(this.consulta)
    this.nav.navigateBack('agend-consulta')
  }

  back(){
    this.nav.back();
  }

  move(toPage: string): void {
    this.nav.navigateForward(toPage);
  }

}

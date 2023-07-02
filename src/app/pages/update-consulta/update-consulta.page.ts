import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-update-consulta',
  templateUrl: './update-consulta.page.html',
  styleUrls: ['./update-consulta.page.scss'],
})
export class UpdateConsultaPage implements OnInit {

  consulta = {
    doutor: '',
    paciente: '',
    data: '',
    hora: ''
  }
  consultaUpdate = {
    doutor: '',
    paciente: '',
    data: '',
    hora: ''
  }

  lista = []

  constructor(
    private nav: NavController,
    private consultaService: ConsultaService
  ) {

   }

  ngOnInit() {
    this.consulta = this.consultaService.loadConsulta()
    this.consultaUpdate = this.consultaService.loadConsulta()
    const aux:any = localStorage.getItem('Consulta')
    this.lista = JSON.parse(aux)
  }

  save(){
    const item = this.consultaUpdate
    var lista:any = this.lista.filter((el: any) => {
      if(el.doutor == item.doutor && el.paciente == item.paciente && el.data == item.data && el.hora == item.hora){
        el.doutor = this.consulta.doutor
        el.paciente = this.consulta.paciente
        el.data = this.consulta.data
        el.hora = this.consulta.hora
      }
      return el
    })
    const aux:any = JSON.stringify(lista)
    localStorage.setItem('Consulta', aux)
    this.nav.navigateBack('lista-consulta')
  }

  move(toPage: string): void {
    this.nav.navigateBack('lista-consulta');
  }

}

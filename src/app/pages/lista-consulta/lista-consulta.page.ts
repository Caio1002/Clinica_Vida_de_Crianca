import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.page.html',
  styleUrls: ['./lista-consulta.page.scss'],
})
export class ListaConsultaPage implements OnInit {

  constructor(
    private nav: NavController,
    private consultaService: ConsultaService) {
    
  }

  ngOnInit() {
  }

  sortString(a: string, b: string){
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if(x<y){return -1;}
    if(x>y){return 1;}
    return 0;
  }

  ionViewWillEnter(){
    const aux:any = localStorage.getItem('Consulta')
    this.lista = JSON.parse(aux)
    console.log('lista de consultas');
  }

  exibeCadastro(){
    localStorage.setItem('consulta', 'criar');
    this.nav.navigateForward('agend-consulta');
  }

  detalhe(item: any){
    const aux = JSON.stringify(item);
    localStorage.setItem('consulta', aux);
    console.log('origem');
    this.nav.navigateForward('detalhe-consulta')
  }

  deletar(item: any){
    this.lista = this.lista.filter((el: any) => el != item)
    localStorage.setItem('Consulta', JSON.stringify(this.lista))
  }

  lista = [
    {doutor: '', paciente: '', data: '', hora: ''}
  ]

  move(toPage: string): void {
    this.nav.navigateForward(toPage);
  }

  editar(consulta:{}){
    this.consultaService.detailConsulta(consulta)
    this.nav.navigateForward('update-consulta')
  }

}

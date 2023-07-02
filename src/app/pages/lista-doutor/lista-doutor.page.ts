import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DoutorService } from 'src/app/services/doutor.service';

@Component({
  selector: 'app-lista-doutor',
  templateUrl: './lista-doutor.page.html',
  styleUrls: ['./lista-doutor.page.scss'],
})
export class ListaDoutorPage implements OnInit {

  constructor(
    private nav: NavController,
    private pessoaService: DoutorService) {
    
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
    const aux:any = localStorage.getItem('Doutor')
    this.lista = JSON.parse(aux)
    console.log('lista doutor');
  }

  exibeCadastro(){
    localStorage.setItem('doutor', 'criar');
    this.nav.navigateForward('cad-doutor');
  }

  detalhe(item: any){
    const aux = JSON.stringify(item);
    localStorage.setItem('doutor', aux);
    console.log('origem');
    this.nav.navigateForward('detalhe-cadastro')
  }

  deletar(item: any){
    this.lista = this.lista.filter((el: any) => el != item)
    localStorage.setItem('Doutor', JSON.stringify(this.lista))
  }

  lista = [
    {name: '', idade: 0}
  ]

  move(toPage: string): void {
    this.nav.navigateForward(toPage);
  }

}

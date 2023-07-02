import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.page.html',
  styleUrls: ['./lista-pessoa.page.scss'],
})
export class ListaPessoaPage implements OnInit {

  constructor(
    private nav: NavController,
    private pessoaService: PessoaService) {
    
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
    const aux:any = localStorage.getItem('Pessoa')
    this.lista = JSON.parse(aux)
    console.log('lista pacientes');
  }

  exibeCadastro(){
    localStorage.setItem('pessoa', 'criar');
    this.nav.navigateForward('form-cadastro');
  }

  detalhe(item: any){
    const aux = JSON.stringify(item);
    localStorage.setItem('pessoa', aux);
    console.log('origem');
    this.nav.navigateForward('detalhe-cadastro')
  }

  deletar(item: any){
    this.lista = this.lista.filter((el: any) => el != item)
    localStorage.setItem('Pessoa', JSON.stringify(this.lista))
  }

  lista = [
    {name: '', idade: 0, sexo: ''}
  ]

  move(toPage: string): void {
    this.nav.navigateForward(toPage);
  }

  editar(pessoa:{}){
    this.pessoaService.detailPessoa(pessoa)
    this.nav.navigateForward('update-pessoa')
  }

}

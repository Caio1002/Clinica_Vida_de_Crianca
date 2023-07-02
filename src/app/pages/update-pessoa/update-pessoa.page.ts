import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PessoaService } from 'src/app/services/pessoa.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-pessoa',
  templateUrl: './update-pessoa.page.html',
  styleUrls: ['./update-pessoa.page.scss'],
})
export class UpdatePessoaPage implements OnInit {
  pessoa = {
    name: '',
    idade: 0,
    sexo: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    telefone: ''
  }
  pessoaUpdate = {
    name: '',
    idade: 0,
    sexo: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
    numero: '',
    telefone: ''
  }

  lista = []

  constructor(
    public toastController: ToastController,
    private pessoaService: PessoaService,
    private nav: NavController
  ) {

  }

  ngOnInit() {
    this.pessoa = this.pessoaService.loadPeople()
    this.pessoaUpdate = this.pessoaService.loadPeople()
    const aux:any = localStorage.getItem('Pessoa')
    this.lista = JSON.parse(aux)
    
  }

  save(){
    const item = this.pessoaUpdate
    var lista:any = this.lista.filter((el: any) => {
      if(el.idade == item.idade && el.name == item.name && el.sexo == item.sexo && el.cep == item.cep &&
         el.rua == item.rua && el.numero == item.numero && el.bairro == item.bairro && el.cidade == item.cidade &&
         el.estado == item.estado && el.telefone == item.telefone){
        el.name = this.pessoa.name
        el.idade = this.pessoa.idade
        el.sexo = this.pessoa.sexo
        el.cep = this.pessoa.cep
        el.rua = this.pessoa.rua
        el.bairro = this.pessoa.bairro
        el.cidade = this.pessoa.cidade
        el.estado = this.pessoa.estado
        el.numero = this.pessoa.numero
        el.telefone = this.pessoa.telefone
      }
      return el
    })
    const aux:any = JSON.stringify(lista)
    localStorage.setItem('Pessoa', aux)
    this.nav.navigateBack('pessoa')
  }

  move(toPage: string): void {
    this.nav.navigateBack('pessoa');
  }

  //Plugin web
  async apiCep(){
    const cep = this.pessoa.cep;
    const k = cep.length;
    const url = 'http://viacep.com.br/ws/' + cep + '/json/';

    if(k==8){
      const response = await fetch(url);
      const prom = response.text();
      prom.then((x:any) => {
        x = JSON.parse(x);
        this.pessoa.rua = x.logradouro,
        this.pessoa.bairro = x.bairro,
        this.pessoa.cidade = x.localidade,
        this.pessoa.estado = x.uf
      });
    }
  }

  //Plugin web
  async apiName(){
    const name = this.pessoa.name;
    const url = 'https://api.genderize.io?name=' + name;

    const response = await fetch(url);
    const prom = response.text();
    prom.then((x:any) => {
      x = JSON.parse(x);
      this.pessoa.sexo = x.gender
      if(this.pessoa.sexo == 'male'){
        this.pessoa.sexo = 'masculino';
      }else if(this.pessoa.sexo == 'female'){
        this.pessoa.sexo ='feminino';
      }
    })
  }

  //Plugin capacitor
  async openToast(){
    const toast = await this.toastController.create({
      message: 'Suas informações foram salvas.',
      duration: 2000
    });
    toast.present();
  }

}
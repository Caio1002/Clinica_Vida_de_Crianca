import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Pessoa } from 'src/app/class/Pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.page.html',
  styleUrls: ['./form-cadastro.page.scss'],
})
export class FormCadastroPage implements OnInit {


  pessoa: Pessoa = new Pessoa();

  lista = []

  constructor(
    private nav: NavController, 
    
    private pessoaService: PessoaService
    ) {

  }

  ngOnInit() {
    const aux:any = localStorage.getItem('pacientes')
    this.lista = aux ? JSON.parse(aux) : [];
  }

  save(){
    this.pessoaService.save(this.pessoa)
    this.nav.navigateBack('pessoa')
  }

  back(){
    this.nav.back();
  }

  move(toPage: string): void {
    this.nav.navigateForward(toPage);
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

}

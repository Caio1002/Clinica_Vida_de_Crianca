import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/class/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  save(pessoa: Pessoa){
    pessoa.save()
  }

  detailPessoa(pessoa:{}){
    const data = JSON.stringify(pessoa)
    localStorage.setItem('pessoaSelect', data)
  }

  loadPeople(){
    const aux:any = localStorage.getItem('pessoaSelect')
    return JSON.parse(aux)
  }

}

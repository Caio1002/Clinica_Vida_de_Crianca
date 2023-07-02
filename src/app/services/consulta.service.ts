import { Injectable } from '@angular/core';
import { Consulta } from '../class/Consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor() { }

  save(consulta: Consulta){
    consulta.save()
  }

  detailConsulta(consulta:{}){
    const data = JSON.stringify(consulta)
    localStorage.setItem('consultaSelect', data)
  }

  loadConsulta(){
    const aux:any = localStorage.getItem('consultaSelect')
    return JSON.parse(aux)
  }

}

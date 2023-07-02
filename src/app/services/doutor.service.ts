import { Injectable } from '@angular/core';
import { Doutor } from 'src/app/class/Doutor'

@Injectable({
  providedIn: 'root'
})
export class DoutorService {

  constructor() { }

  save(doutor: Doutor){
    doutor.save()
  }

  detailDoutor(doutor:{}){
    const data = JSON.stringify(doutor)
    localStorage.setItem('doutorSelect', data)
  }

  loadDoutor(){
    const aux:any = localStorage.getItem('doutorSelect')
    return JSON.parse(aux)
  }

}

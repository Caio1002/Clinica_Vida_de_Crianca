import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Doutor } from 'src/app/class/Doutor';
import { DoutorService } from 'src/app/services/doutor.service';

@Component({
  selector: 'app-cad-doutor',
  templateUrl: './cad-doutor.page.html',
  styleUrls: ['./cad-doutor.page.scss'],
})
export class CadDoutorPage implements OnInit {

  doutor: Doutor = new Doutor();

  lista = []

  constructor(
    private nav: NavController, 
    
    private doutorService: DoutorService
    ) {

  }

  ngOnInit() {
    const aux:any = localStorage.getItem('doutor')
    this.lista = aux ? JSON.parse(aux) : [];
  }

  save(){
    this.doutorService.save(this.doutor)
    this.nav.navigateBack('cad-doutor')
  }

  back(){
    this.nav.back();
  }

  move(toPage: string): void {
    this.nav.navigateForward(toPage);
  }

}

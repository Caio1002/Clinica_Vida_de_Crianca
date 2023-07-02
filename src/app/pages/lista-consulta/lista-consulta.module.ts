import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListaConsultaPageRoutingModule } from './lista-consulta-routing.module';

import { ListaConsultaPage } from './lista-consulta.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ListaConsultaPageRoutingModule
  ],
  declarations: [ListaConsultaPage]
})
export class ListaConsultaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendConsultaPageRoutingModule } from './agend-consulta-routing.module';

import { AgendConsultaPage } from './agend-consulta.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendConsultaPageRoutingModule,
    ComponentModule
  ],
  declarations: [AgendConsultaPage]
})
export class AgendConsultaPageModule {}

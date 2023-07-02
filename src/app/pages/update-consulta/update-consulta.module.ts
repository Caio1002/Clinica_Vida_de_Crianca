import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateConsultaPageRoutingModule } from './update-consulta-routing.module';

import { UpdateConsultaPage } from './update-consulta.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    UpdateConsultaPageRoutingModule
  ],
  declarations: [UpdateConsultaPage]
})
export class UpdateConsultaPageModule {}

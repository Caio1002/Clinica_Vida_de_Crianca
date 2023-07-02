import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListaDoutorPageRoutingModule } from './lista-doutor-routing.module';

import { ListaDoutorPage } from './lista-doutor.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ListaDoutorPageRoutingModule
  ],
  declarations: [ListaDoutorPage]
})
export class ListaDoutorPageModule {}

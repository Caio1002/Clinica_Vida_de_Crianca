import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadDoutorPageRoutingModule } from './cad-doutor-routing.module';

import { CadDoutorPage } from './cad-doutor.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadDoutorPageRoutingModule,
    ComponentModule
  ],
  declarations: [CadDoutorPage]
})
export class CadDoutorPageModule {}

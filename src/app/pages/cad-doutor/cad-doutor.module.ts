import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadDoutorPageRoutingModule } from './cad-doutor-routing.module';

import { CadDoutorPage } from './cad-doutor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadDoutorPageRoutingModule
  ],
  declarations: [CadDoutorPage]
})
export class CadDoutorPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePessoaPageRoutingModule } from './update-pessoa-routing.module';

import { UpdatePessoaPage } from './update-pessoa.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePessoaPageRoutingModule,
    ComponentModule
  ],
  declarations: [UpdatePessoaPage]
})
export class UpdatePessoaPageModule {}

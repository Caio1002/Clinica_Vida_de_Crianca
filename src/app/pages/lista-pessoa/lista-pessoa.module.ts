import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListaPessoaPage } from './lista-pessoa.page';

import { ListaPessoaPageRoutingModule } from './lista-pessoa-routing.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ListaPessoaPageRoutingModule
  ],
  declarations: [ListaPessoaPage]
})
export class ListaPessoaPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendConsultaPage } from './agend-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: AgendConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendConsultaPageRoutingModule {}

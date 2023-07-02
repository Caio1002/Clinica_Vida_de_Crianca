import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateConsultaPage } from './update-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateConsultaPageRoutingModule {}

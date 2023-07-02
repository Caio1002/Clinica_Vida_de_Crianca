import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadDoutorPage } from './cad-doutor.page';

const routes: Routes = [
  {
    path: '',
    component: CadDoutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadDoutorPageRoutingModule {}

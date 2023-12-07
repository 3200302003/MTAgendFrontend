import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarLugarPage } from './agregar-lugar.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarLugarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarLugarPageRoutingModule {}

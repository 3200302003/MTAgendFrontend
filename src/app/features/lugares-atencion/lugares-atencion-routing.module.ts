import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresAtencionPage } from './lugares-atencion.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresAtencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresAtencionPageRoutingModule {}

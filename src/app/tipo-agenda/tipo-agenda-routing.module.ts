import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoAgendaPage } from './tipo-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: TipoAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoAgendaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoAgendaPageRoutingModule } from './tipo-agenda-routing.module';

import { TipoAgendaPage } from './tipo-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoAgendaPageRoutingModule
  ],
  declarations: [TipoAgendaPage]
})
export class TipoAgendaPageModule {}

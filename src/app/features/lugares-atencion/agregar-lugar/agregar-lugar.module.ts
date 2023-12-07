import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarLugarPageRoutingModule } from './agregar-lugar-routing.module';

import { AgregarLugarPage } from './agregar-lugar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarLugarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarLugarPage]
})
export class AgregarLugarPageModule {}

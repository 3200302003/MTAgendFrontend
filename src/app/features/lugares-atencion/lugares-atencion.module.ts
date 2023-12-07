import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugaresAtencionPageRoutingModule } from './lugares-atencion-routing.module';

import { LugaresAtencionPage } from './lugares-atencion.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugaresAtencionPageRoutingModule,
    HttpClientModule
  ],
  declarations: [LugaresAtencionPage]
})
export class LugaresAtencionPageModule {}

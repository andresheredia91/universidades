import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterUniversidadPageRoutingModule } from './register-universidad-routing.module';

import { RegisterUniversidadPage } from './register-universidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterUniversidadPageRoutingModule
  ],
  declarations: [RegisterUniversidadPage]
})
export class RegisterUniversidadPageModule {}
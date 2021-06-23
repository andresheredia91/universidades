import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversidadesRoutingModule } from './universidades-routing.module';

import { UniversidadesComponent } from './universidades.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversidadesRoutingModule
  ],
  declarations: [UniversidadesComponent]
})
export class UniversidadesModule {}
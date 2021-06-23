import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProgramasPageRoutingModule } from './lista-programas-routing.module';

import { ListaProgramasPage } from './lista-programas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProgramasPageRoutingModule
  ],
  declarations: [ListaProgramasPage]
})
export class ListaProgramasPageModule {}

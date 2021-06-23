import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaProgramasPage } from './lista-programas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaProgramasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaProgramasPageRoutingModule {}

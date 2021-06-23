import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversidadesComponent } from './universidades.component';

const routes: Routes = [
  {
    path: '',
    component: UniversidadesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversidadesRoutingModule {}
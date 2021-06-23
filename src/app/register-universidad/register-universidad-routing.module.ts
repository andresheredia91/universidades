import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterUniversidadPage } from './register-universidad.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterUniversidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterUniversidadPageRoutingModule {}

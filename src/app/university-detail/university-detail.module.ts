import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversityDetailPageRoutingModule } from './university-detail-routing.module';

import { UniversityDetailPage } from './university-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversityDetailPageRoutingModule
  ],
  declarations: [UniversityDetailPage]
})
export class UniversityDetailPageModule {}

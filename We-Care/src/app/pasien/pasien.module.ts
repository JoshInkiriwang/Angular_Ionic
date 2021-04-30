import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasienPageRoutingModule } from './pasien-routing.module';

import { PasienPage } from './pasien.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasienPageRoutingModule
  ],
  declarations: [PasienPage]
})
export class PasienPageModule {}

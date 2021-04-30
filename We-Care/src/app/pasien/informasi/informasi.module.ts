import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformasiPageRoutingModule } from './informasi-routing.module';

import { InformasiPage } from './informasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformasiPageRoutingModule
  ],
  declarations: [InformasiPage]
})
export class InformasiPageModule {}

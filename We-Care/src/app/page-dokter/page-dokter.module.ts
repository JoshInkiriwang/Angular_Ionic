import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDokterPageRoutingModule } from './page-dokter-routing.module';

import { PageDokterPage } from './page-dokter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDokterPageRoutingModule
  ],
  declarations: [PageDokterPage]
})
export class PageDokterPageModule {}

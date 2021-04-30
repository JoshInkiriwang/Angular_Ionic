import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDokterPage } from './page-dokter.page';

const routes: Routes = [
  {
    path: '',
    component: PageDokterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDokterPageRoutingModule {}

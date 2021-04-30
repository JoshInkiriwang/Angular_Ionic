import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformasiPage } from './informasi.page';

const routes: Routes = [
  {
    path: '',
    component: InformasiPage
  },
  {
    path: ':pasienId',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformasiPageRoutingModule {}

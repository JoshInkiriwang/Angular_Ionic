import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasienPage } from './pasien.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pasien/tab/monitor',
    pathMatch: 'full'
  },
  {
    path: 'tab',
    component: PasienPage,
    children: [
      {
        path: 'monitor',
        loadChildren: () => import('./monitor/monitor.module').then( m => m.MonitorPageModule)
      },
      {
        path: 'informasi',
        loadChildren: () => import('./informasi/informasi.module').then( m => m.InformasiPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasienPageRoutingModule {}

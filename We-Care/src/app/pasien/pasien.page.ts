import { Component, OnInit } from '@angular/core';
import {Pasien} from '../models/pasien.model';
import {PasienService} from '../services/pasien.service';

@Component({
  selector: 'app-pasien',
  templateUrl: './pasien.page.html',
  styleUrls: ['./pasien.page.scss'],
})
export class PasienPage implements OnInit {
  pasiens: Pasien[];
  constructor(private pasiensSrv: PasienService) { }

  ngOnInit() {
    this.pasiens = this.pasiensSrv.getAllPasiens();
  }

  ionViewWillEnter() {
    this.pasiens = this.pasiensSrv.getAllPasiens();
  }

}

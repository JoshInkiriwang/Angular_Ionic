import { Component, OnInit } from '@angular/core';
import {Pasien} from '../../models/pasien.model';
import {PasienService} from '../../services/pasien.service';

@Component({
  selector: 'app-informasi',
  templateUrl: './informasi.page.html',
  styleUrls: ['./informasi.page.scss'],
})
export class InformasiPage implements OnInit {
  pasiens: Pasien[];
  constructor(private pasienSrv: PasienService) { }

  ngOnInit() {
    this.pasiens = this.pasienSrv.getAllPasiens();
  }

  ionViewWillEnter() {
    this.pasiens = this.pasienSrv.getAllPasiens();
  }

}

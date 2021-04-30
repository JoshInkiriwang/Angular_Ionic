import { Component, OnInit } from '@angular/core';
import {Pasien} from '../../../models/pasien.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PasienService} from '../../../services/pasien.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedPasien: Pasien;
  constructor(
      private activatedRoute: ActivatedRoute,
      private pasienSrv: PasienService,
      private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (!paramMap.has('pasienId')) { return; }
      const pasienId = paramMap.get('pasienId');
      this.loadedPasien = this.pasienSrv.getPasien(pasienId);
    });
  }

  ionViewDidEnter() {
    this.pasienSrv.getAllPasiens();
  }


}

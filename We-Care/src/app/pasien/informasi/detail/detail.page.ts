import { Component, OnInit } from '@angular/core';
import {Pasien} from '../../../models/pasien.model';
import {ActivatedRoute} from '@angular/router';
import {PasienService} from '../../../services/pasien.service';
import {AlertController, NavController, ToastController} from '@ionic/angular';

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
      private navCtrl: NavController,
      private toastCtrl: ToastController,
      private alertCtrl: AlertController
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

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Transfer Pasien',
      message: 'Apakah Pasien Ini Ingin Di Transfer ?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel'
        },
        {
          text: 'Ya',
          handler: () => this.pasienSrv.transferPasien(this.loadedPasien.id_pasien)
        }
      ]
    });
    await alert.present();
  }


}

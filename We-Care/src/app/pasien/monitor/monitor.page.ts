import { Component, OnInit } from '@angular/core';
import {Pasien} from '../../models/pasien.model';
import {PasienService} from '../../services/pasien.service';
import {AuthService} from '../../services/auth.service';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit {
  pasiens: Pasien[];
  constructor(private pasienSrv: PasienService,
              private authSrv: AuthService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.pasiens = this.pasienSrv.getAllPasiens();
  }

  ionViewWillEnter() {
    this.pasiens = this.pasienSrv.getAllPasiens();
    this.pasienSrv.randomSuhu();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Log Out',
      message: 'Apakah Anda Ingin Log Out ?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel'
        },
        {
          text: 'Ya',
          handler: () => this.authSrv.logoutUser()
        }
      ]
    });
    await alert.present();
  }
}

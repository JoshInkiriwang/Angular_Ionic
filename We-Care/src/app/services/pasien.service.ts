import { Injectable } from '@angular/core';
import {Pasien} from '../models/pasien.model';
import {NavController, ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PasienService {
  private pasiens: Pasien[] = [
    {
      id_pasien: 'p001',
      nama_pasien: 'Top Markotop',
      ruangan_perawatan: '102',
      no_bpjs_pasien: '',
      imageUrl: 'https://cdn.zmescience.com/wp-content/uploads/2018/05/169764_web.jpg',
      tempat_lahir: 'Balikpapan',
      tanggal_lahir: '30 Januari 1986',
      nama_dokter: 'Luis',
      suhu_badan: this.randomSuhu()
    },
    {
      id_pasien: 'p002',
      nama_pasien: 'Susi Silimikiti',
      ruangan_perawatan: '104',
      no_bpjs_pasien: '110110110',
      imageUrl: 'https://media.buzzle.com/media/images-en/gallery/human-expressions/1200-156820425-fair-woman.jpg',
      tempat_lahir: 'Kupang',
      tanggal_lahir: '17 September 1990',
      nama_dokter: 'Sulaiman',
      suhu_badan: this.randomSuhu()
    },
    {
      id_pasien: 'p003',
      nama_pasien: 'Bambang Pratama',
      ruangan_perawatan: '112',
      no_bpjs_pasien: '123432141',
      imageUrl: 'https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/sozialewahrnehmung/m29_30_gr.jpg',
      tempat_lahir: 'Medan',
      tanggal_lahir: '05 Juni 1992',
      nama_dokter: 'Kristianto',
      suhu_badan : this.randomSuhu()
    }
  ];
  constructor(private toastCtrl: ToastController, private navCtrl: NavController) { }

  getAllPasiens(){
    return [...this.pasiens];
  }

  getPasien(pasienId: string) {
    return {...this.pasiens.find( pasien => {
      return pasien.id_pasien === pasienId;
    })};
  }

  transferPasien(pasienId: string) {
    this.pasiens = this.pasiens.filter(pasien => {
      return pasien.id_pasien !== pasienId;
    });
    this.navCtrl.navigateForward('/pasien/tab/informasi');
    this.presentToast();
  }

  randomSuhu() {
    return Math.floor(Math.random() * (40.0 - 35.0 +  1.0) + 35.0);
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Pasien Berhasil Di Transfer',
      duration: 5000
    });
    await toast.present();
  }

}

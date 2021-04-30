import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {LoadingController, NavController, ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
      private fireAuth: AngularFireAuth,
      private navCtrl: NavController,
      private toastCtrl: ToastController,
      private loadingCtrl: LoadingController) { }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.createUserWithEmailAndPassword(value.email, value.password)
          .then(
            res => resolve(res),
            err => reject(err)
          );
    });
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.signInWithEmailAndPassword(value.email, value.password)
          .then(
            res => resolve(res),
            err => reject(err)
          );
    });
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.fireAuth.currentUser) {
        this.fireAuth.signOut()
            .then(() => {
              console.log('Log Out');
              this.presentLogOutToast();
              this.navCtrl.navigateForward('/login');
              resolve();
            }).catch((error) => {
              reject();
        });
      }
    });
  }

  userDetail() {
    return this.fireAuth.user;
  }

    async presentLogOutToast() {
        const toast = await this.toastCtrl.create({
            message: 'Log Out Succesful',
            duration: 5000
        });
        await toast.present();
    }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
// tslint:disable-next-line:variable-name
  validations_form: FormGroup;
  errorMessage = '';

// tslint:disable-next-line:variable-name
  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' }
    ]
  };

  constructor(
      private navCtrl: NavController,
      private authSrv: AuthService,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group( {
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }

  loginUser(value) {
    this.authSrv.loginUser(value)
        .then(res => {
          console.log(res);
          this.errorMessage = '';
          this.navCtrl.navigateForward('/pasien');
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
        });
  }

  gotoRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

}

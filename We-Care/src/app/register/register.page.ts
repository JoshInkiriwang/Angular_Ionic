import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // tslint:disable-next-line:variable-name
  validations_form: FormGroup;
  errorMessage = '';
  successMessage = '';

  // tslint:disable-next-line:variable-name
  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minLength', message: 'Password must be at least 6 characters long.' }
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
          Validators.minLength(5),
          Validators.required
      ]))
    });
  }

  tryRegister(value) {
    this.authSrv.registerUser(value)
        .then(res => {
          console.log(res);
          this.errorMessage = '';
          this.successMessage = 'Your Account Has Been Created. Please Log in.';
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = '';
      });
  }

  goLoginPage() {
    this.navCtrl.navigateBack('/login');
  }

}

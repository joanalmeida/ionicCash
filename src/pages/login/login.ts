import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: string;
  pass: string;
  isLoggedIn: boolean;

  constructor(public navCtrl: NavController, private auth: AuthProvider) {
  }

  logIn() {
    this.isLoggedIn = this.auth.logIn()
  }

}

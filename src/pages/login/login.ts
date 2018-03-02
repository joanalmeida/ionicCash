import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RegistrationPage } from '../registration/registration';
import { User } from '../../models/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User;
  isLoggedIn: boolean;
  loader: any;

  constructor(public navCtrl: NavController,
    private auth: AuthProvider,
    private loadingCtrl: LoadingController) {
      this.user = new User({username: null, password: null})
  }

  logIn(userInfo) {
    if(!this.user.isValid()) {
      //Mostrar error
      console.log("Imprimir un error")
      return;
    }
    this.showLoading()
    this.auth.logIn(this.user)
      .then((value) => {
        this.isLoggedIn = value
        this.loader.dismiss()
        console.log("Usuario logueado: " + this.isLoggedIn)
      })
      .catch((reason) => {
        this.loader.dismiss()
        console.log("Fallo por: " + reason)
      })
    //this.isLoggedIn = this.auth.logIn(user)
  }

  goToRegistrationPage() {
    this.navCtrl.push(RegistrationPage)
  }

  showLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Iniciando sesión"
    })
    this.loader.present()
  }

}

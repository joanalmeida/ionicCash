import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { User } from '../../models/user';

@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html'
})
export class RegistrationPage {
    user: User;
    loader: any;
    
    constructor(public navCtrl: NavController,
        private loadingCtrl: LoadingController,
        private alertCtrl: AlertController) {
            this.user = new User({username: null, password: null, name: null})
    }

    register(registrationInfo) {
        console.log("Registrando en la app")
        this.showRegistering()
    }

    showRegistering() {
        this.loader = this.loadingCtrl.create({
            content: "Registrando..."
        })
        this.loader.present()
        setTimeout(() => {
            this.loader.dismiss()
            let alert = this.alertCtrl.create({
                title: 'Registro completo!',
                subTitle: 'Ya podes loguearte con tu usuario',
                buttons: ["OK"]
            })
            alert.present()
            this.navCtrl.pop()
        }, 3000)
    }
}

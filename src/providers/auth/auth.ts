import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private loggedIn: boolean;

  constructor(public http: HttpClient) {

  }

  logIn(user: User): Promise<boolean> {
    let requestLogIn = new Promise<boolean>((resolve, reject) => {
      if(!user.username) reject("No se recibio nombre de usuario") 

      //Mock pegada http con resultado verdadero
      setTimeout(() => {
        resolve(true)
      }, 3000)
    })

    return requestLogIn;

    //requestLogIn().then()
    //this.loggedIn = true;

    //return this.loggedIn;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

}

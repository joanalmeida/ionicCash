import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  logIn(): boolean {
    this.loggedIn = true;

    return this.loggedIn;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

}

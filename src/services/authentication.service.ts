import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

const TOKEN_KEY = 'auth-key';

@Injectable()
export class AuthenticationService {
  user = {} as User;

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform, private afAuth: AngularFireAuth) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }
  doLogin(user) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        resolve(res);
      }, err => reject(err));
    });
   }
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
  isAuthenticated() {
    return this.authenticationState.value;
  }
}

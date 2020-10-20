import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  user = {} as User;
  errorMessage: string;

  constructor(private authService: AuthenticationService, private afAuth: AngularFireAuth,
    public router: Router, private afDatabase: AngularFireDatabase) {
    }

  ngOnInit() {
  }

  tryLogin(user) {
    this.authService.doLogin(user)
    .then(res => {
      this.router.navigate(['home']);
    }, err => {
      this.errorMessage = 'catch';
    });
  }
}

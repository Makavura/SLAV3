import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
// import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public afAuth: AngularFireAuth) {

   }
   login() {
     this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
   }
   logout() {
     this.afAuth.auth.signOut();
   }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersDocs: any;
  usersDoks: any[] = [];

  constructor( public afAuth: AngularFireAuth ) {

   }
   login() {
     this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
   }
   logout() {
     this.afAuth.auth.signOut();
   }

  ngOnInit() {
    this.getName();
  }

  getName() {
        // this.afAuth.user.subscribe(data => console.log(data.displayName));
        if (this.afAuth.user) {
        this.afAuth.user.subscribe(data => {
          this.usersDocs = data;
        // tslint:disable-next-line: prefer-const
          let userName = this.usersDocs.displayName;
          this.usersDoks.push(userName);
          return userName;
        }
          );
        }
        console.log(this.usersDoks);

  }

}

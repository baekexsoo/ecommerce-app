import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import auth from 'firebase/firebase-auth';
import * as firebaseui from "firebase"


import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';
import * as firebase from 'firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<any>;
  firebase: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }


  async googleSignin() {
    const provider = new this.firebase.auth.GoogleAuthProvider();
    const credential = await this.firebase.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.firebase.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData({uid, email,   photoURL, displayName}: User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = {
    uid,
    email,
    displayName,
    photoURL
    };

    return userRef.set(data, { merge: true });

  }

}
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false

  constructor(public firebaseAuth = AngularFireAuth) {
   
   }
}

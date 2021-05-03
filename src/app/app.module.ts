import { FirebaseService } from './services/firebase.service';
import { LoginModule } from './login/login.module';
import { MatSliderModule } from '@angular/material/slider';
import { CategorieService } from './categorie.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';



import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CartModule } from './cart/cart.module';
import { CategorieModule } from './categorie/categorie.module';
import { HomeModule } from './home/home.module';
import { Routes, RouterModule } from '@angular/router';
import { RegisterModule } from './register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




const routes: Routes = [
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB1l6uFXvPePJhSEP6zxV_hu1eGfKET-yA",
      authDomain: "ecommerce-8dd73.firebaseapp.com",
      databaseURL: "https://ecommerce-8dd73-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "ecommerce-8dd73",
      storageBucket: "ecommerce-8dd73.appspot.com",
      messagingSenderId: "588893656849",
      appId: "1:588893656849:web:44bc259559710d1cd1deb0"
    }),
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    CartModule,
    LoginModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule ,
    CategorieModule,
    RegisterModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService,
    FirebaseService,
  CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

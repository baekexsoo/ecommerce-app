import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

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

const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    CartModule,
    CategorieModule,
    RegisterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

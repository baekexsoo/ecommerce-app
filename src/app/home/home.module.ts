import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
]

@NgModule({
  declarations: [HomeComponent,
    ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }

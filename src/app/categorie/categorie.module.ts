import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieComponent } from './categorie.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'categorie',
    component: CategorieComponent,
  },
]

@NgModule({
  declarations: [
    CategorieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CategorieModule { }

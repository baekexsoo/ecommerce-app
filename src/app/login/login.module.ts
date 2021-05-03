import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CategorieComponent } from '../categorie/categorie.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

    { path: 'categorie', component: CategorieComponent, canActivate: [AuthGuard] }

]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSliderModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LoginModule { }

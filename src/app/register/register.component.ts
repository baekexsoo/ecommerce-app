import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, public auth: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  onRegisterSubmit() {
    alert(this.user.name + ' ' + this.user.email + ' ' + this.user.password);
  }

}
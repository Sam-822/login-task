import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  passType = 'password';
  loginForm!: FormGroup;
  submitted = false;
  error = '';
  token =
    'dAwMpo/TAWLhFrwwr3Wzcmc8XTdmAgp6zmGLsFmJ9HAnEbTQAg937i/hqKFjtFVQ4TnQ2y6xlVSeTKy3VWcxvalwvmPq6qF7+UcLd3wBXYoVQ2Puj49mTweKh/v2Rvj9zyVjfbexFkjMNZ5XyGucmdOI6XMmI98Zvu38Jh1fOo8157YxlgCozKkonixczjGIn3RKLuv7v3gXDRl4irzRcS6lYKGJB8vfA847GUppsVjdZV9bAjADfqUP2Iyl6Nz8MOWrSHNy8tWqhM6mI165rCwH3xMv7HEexmsMO7Mi36c=s';

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    const userData = localStorage.getItem('userdata');
    if (userData) this.router.navigate(['/user']);
  }

  togglePass = () => {
    if (this.passType === 'password') this.passType = 'text';
    else this.passType = 'password';
  };

  submitForm = async () => {
    this.submitted = true;
    if (!this.loginForm?.valid) {
      console.log('INVALID FORM');
      return;
    }
    console.log(this.loginForm.value);

    const res = await fetch(
      'https://dev-api.wanasti.com/api/v1/user/login?lang=en&currencyCode=KW',
      {
        method: 'POST',
        headers: {
          Auth: this.token,
        },
        body: JSON.stringify({
          ...this.loginForm.value,
          phone: '',
          phoneCode: '965',
          deviceToken: '',
          deviceType: '',
          deviceModel: '',
          appVersion: '',
          osVersion: '',
        }),
      }
    );

    const data = await res.json();
    if (data.status !== 1) {
      this.error = data.message || 'SOMETHING WENT WRONG';
      return;
    }

    console.log('LOGGED IN SUCCESSFULLY');
    localStorage.setItem('userdata', JSON.stringify(data.data));
    this.error = '';
    this.router.navigate(['/user']);
  };
}

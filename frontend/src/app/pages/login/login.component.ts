import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl:'./login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(private auth: Auth, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    const { email, password } = this.loginForm.value;
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Login successful!');
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}

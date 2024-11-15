import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="login()">
      <label>
        Email:
        <input type="email" formControlName="email" />
      </label>
      <label>
        Password:
        <input type="password" formControlName="password" />
      </label>
      <button type="submit" [disabled]="loginForm.invalid">Login</button>
    </form>
    <p *ngIf="errorMessage">{{ errorMessage }}</p>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      max-width: 300px;
    }
    label {
      margin-bottom: 1em;
    }
    button {
      margin-top: 1em;
    }
  `],
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

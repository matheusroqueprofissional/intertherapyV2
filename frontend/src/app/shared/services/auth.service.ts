import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private logoutTimer: any;

  constructor(private auth: Auth, private router: Router) {}

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        localStorage.setItem('token', 'true');
        this.startLogoutTimer(30 * 60 * 1000); // 30 minutos
        alert('logado');
      })
      .catch((err) => {
        alert('deu erro');
        this.router.navigate(['/login']);
      });
  }

  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        alert('registration successful');
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      });
  }

  logout() {
    this.clearLogoutTimer();
    signOut(this.auth)
      .then(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  private startLogoutTimer(duration: number) {
    this.clearLogoutTimer();
    this.logoutTimer = setTimeout(() => {
      this.logout();
      alert('Sessão expirada por inatividade.');
    }, duration);
  }

  private clearLogoutTimer() {
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
      this.logoutTimer = null;
    }
  }
}

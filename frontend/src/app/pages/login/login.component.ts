import { Component, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { firebaseConfig } from '../../shared/components/firebase/firebase.component';
import { firebaseProviders } from '../../app.config';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  providers: [firebaseProviders],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private auth: Auth = inject(Auth);

  constructor(private router: Router) {}


  createUser(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuário criado:', user);
      })
      .catch((error) => {
        console.error('Erro ao criar usuário:', error.message);
      });
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('Usuário logado:', user);
      })
      .catch((error) => {
        console.error('Erro no login com Google:', error.message);
      });
  }


}

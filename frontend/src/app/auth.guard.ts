import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: Auth) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // Usando o authState que retorna um Observable
    return this.auth.authStateReady.pipe(
      take(1), // Apenas o primeiro valor
      map((user) => {
        if (user) {
          return true; // Usuário autenticado
        } else {
          this.router.navigate(['/login'], {
            queryParams: { returnUrl: state.url }, // Salva a URL original
          });
          return false; // Usuário não autenticado
        }
      })
    );
  }
}

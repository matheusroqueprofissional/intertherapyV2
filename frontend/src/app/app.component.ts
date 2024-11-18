import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { AngularVlibras } from 'angular-vlibras';
import { FooterComponent } from './shared/footer/footer.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})





export class AppComponent implements OnInit{

  a: boolean = false; // Variável para controlar a exibição do header e footer

  // Lista de rotas onde o header e footer devem aparecer
  private allowedRoutes: string[] = [
    '/',
    '/about',
    '/services',
    '/team',
    '/contact',
    '/admin'];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifica se a rota atual está na lista de rotas permitidas
        this.a = this.allowedRoutes.includes(this.router.url);
      }
    });
  }

}

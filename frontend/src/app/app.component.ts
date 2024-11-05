import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { AngularVlibras } from 'angular-vlibras';
import { FooterComponent } from './shared/footer/footer.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,AngularVlibras,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})





export class AppComponent {




  title = 'frontend';
}

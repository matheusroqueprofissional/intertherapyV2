import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { Component } from '@angular/core';
import { TranslateModuleModule } from './shared/translate-module/translate-module.module';
import { AdminModuleModule } from './shared/admin-module/admin-module.module';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC1TRAFbbTHNkuRJZavNiOh0YcyARslorg",
  authDomain: "intertherapy-f5e69.firebaseapp.com",
  projectId: "intertherapy-f5e69",
  storageBucket: "intertherapy-f5e69.appspot.com",
  messagingSenderId: "1080674504020",
  appId: "1:1080674504020:web:3cb76dc240e704c8354cc1",
  measurementId: "G-GEDKC2T711"
};

@Component({
  selector: 'app-root',
  template: `<h1>Firebase Standalone App</h1>`,
  standalone: true,
  imports: [],
})
export class AppComponent {}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(TranslateModuleModule, AdminModuleModule),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideStorage(() => getStorage()), // Provedor do Firebase Storage
    ScreenTrackingService, // Rastreamento de tela para analytics
    UserTrackingService // Rastreamento de usuário para analytics
  ],
};

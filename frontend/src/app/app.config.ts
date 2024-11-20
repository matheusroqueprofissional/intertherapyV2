import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateModuleModule } from './shared/translate-module/translate-module.module';


const firebaseConfig = {
  apiKey: "AIzaSyC1TRAFbbTHNkuRJZavNiOh0YcyARslorg",
  authDomain: "intertherapy-f5e69.firebaseapp.com",
  projectId: "intertherapy-f5e69",
  storageBucket: "intertherapy-f5e69.appspot.com",
  messagingSenderId: "1080674504020",
  appId: "1:1080674504020:web:3cb76dc240e704c8354cc1",
  measurementId: "G-GEDKC2T711"
};


export const appConfig: ApplicationConfig = {
providers:[
  importProvidersFrom(TranslateModuleModule),
  provideRouter(routes),
  [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(()=>getFirestore())], provideFirebaseApp(() => initializeApp({"projectId":"intertherapy-f5e69","appId":"1:1080674504020:web:3cb76dc240e704c8354cc1","storageBucket":"intertherapy-f5e69.appspot.com","apiKey":"AIzaSyC1TRAFbbTHNkuRJZavNiOh0YcyARslorg","authDomain":"intertherapy-f5e69.firebaseapp.com","messagingSenderId":"1080674504020","measurementId":"G-GEDKC2T711"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};

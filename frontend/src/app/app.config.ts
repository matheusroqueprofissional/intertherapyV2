import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"intertherapy-f5e69","appId":"1:1080674504020:web:3cb76dc240e704c8354cc1","storageBucket":"intertherapy-f5e69.appspot.com","apiKey":"AIzaSyC1TRAFbbTHNkuRJZavNiOh0YcyARslorg","authDomain":"intertherapy-f5e69.firebaseapp.com","messagingSenderId":"1080674504020","measurementId":"G-GEDKC2T711"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"intertherapy-f5e69","appId":"1:1080674504020:web:3cb76dc240e704c8354cc1","storageBucket":"intertherapy-f5e69.appspot.com","apiKey":"AIzaSyC1TRAFbbTHNkuRJZavNiOh0YcyARslorg","authDomain":"intertherapy-f5e69.firebaseapp.com","messagingSenderId":"1080674504020","measurementId":"G-GEDKC2T711"})), provideFirestore(() => getFirestore())]
};

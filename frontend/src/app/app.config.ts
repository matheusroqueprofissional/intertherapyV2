import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


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
  provideRouter(routes),
  [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(()=>getFirestore())]]
};

import { bootstrapApplication } from "@angular/platform-browser";
import { enableProdMode } from "@angular/core";

import { AppComponent } from "./app/app.component";
import { environment } from './environments/environment';
import { appConfig } from "./app/app.config";


if (environment.production) {
  enableProdMode();
}

export const firebaseConfig = {
  apiKey: "AIzaSyC1TRAFbbTHNkuRJZavNiOh0YcyARslorg",
  authDomain: "intertherapy-f5e69.firebaseapp.com",
  projectId: "intertherapy-f5e69",
  storageBucket: "intertherapy-f5e69.appspot.com",
  messagingSenderId: "1080674504020",
  appId: "1:1080674504020:web:3cb76dc240e704c8354cc1",
  measurementId: "G-GEDKC2T711"
};


bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

import { bootstrapApplication } from "@angular/platform-browser";
import { enableProdMode } from "@angular/core";

import { AppComponent } from "./app/app.component";
import { environment } from './environments/environment';
import { appConfig } from "./app/app.config";


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

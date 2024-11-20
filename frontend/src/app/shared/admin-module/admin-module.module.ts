import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { AdminPageComponent } from '../../pages/admin-page/admin-page.component';



@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
})
export class AdminModuleModule { }

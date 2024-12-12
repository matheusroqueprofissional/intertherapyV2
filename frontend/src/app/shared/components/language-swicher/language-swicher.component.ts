import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { NgFor } from '@angular/common';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export interface ILanguageOption {
  value: string;
  label: string;
}



@Component({
  selector: 'app-language-swicher',
  standalone: true,
  imports: [MatButton, MatMenuTrigger, MatMenu, NgFor, MatMenuItem, TranslateModule],
  templateUrl: './language-swicher.component.html',
  styleUrl: './language-swicher.component.scss'
})
export class LanguageSwicherComponent {

}

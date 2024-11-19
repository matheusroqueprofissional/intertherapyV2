import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIcon,
    TranslateModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'], // Corrigido o nome da propriedade
})
export class DashboardComponent {
  constructor(private translateService: TranslateService) {

    const userLang = navigator.language || 'en';
    const languageMap: { [key: string]: string } = {
      'en': 'EN-US',
      'pt': 'PT-BR',
    };

    const languageCode = userLang.split('-')[0]; // Pega apenas o código base do idioma
    const mappedLang = languageMap[languageCode] || 'EN-US'; // Usa EN-US como fallback

    this.translateService.setDefaultLang(mappedLang);
    this.translateService.use(mappedLang);
  }
}

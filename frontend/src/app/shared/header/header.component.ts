import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/LanguageService/language.service';
import { ILanguageOption } from '../components/language-swicher/language-swicher.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule,MatFormFieldModule, MatInputModule, FormsModule,MatSelectModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // Corrigi a propriedade 'styleUrl' para 'styleUrls'
})
export class HeaderComponent {
  private readonly translateService = inject(TranslateService);
  languageOptions: ILanguageOption[] = [];
  currentLanguage = 'PT-BR';
  links = ['header.home-page', 'header.about', 'header.services', 'header.contact'];
  hoverColors = ['#A8CF45', '#E50612', '#2DABE5', '#F58634', '#090909'];
  isHovered = [false, false, false, false, false]; // Estado de hover de cada link
  private readonly availableLanguages = ['EN-US', 'PT-BR'];

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}
  ngOnInit(): void {
    this.translateService.addLangs(this.availableLanguages);
    this.translateService.setDefaultLang('EN-US');
    this.buildLanguageOptions();
    this.changeLanguage(this.currentLanguage)
  }

  private buildLanguageOptions() {
    const ENGLISH = this.translateService.get('EN');
    const PORTUGUESE = this.translateService.get('PT');


    forkJoin([ENGLISH, PORTUGUESE]).subscribe((_response) => {
      this.languageOptions = [
        {
          value: this.availableLanguages[0],
          label: _response[0].toUpperCase(),
        },
        {
          value: this.availableLanguages[1],
          label: _response[1].toUpperCase(),
        },
      ];
    });
  }
  changeLanguage(language: string) {
    this.translateService.use(language);
    this.currentLanguage = language;
    localStorage.setItem('language', language);
  }

  switchLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
  }

  redirectTo(value: string) {
    const routeMap:any = {
      'header.inicio': 'inicio',
      'header.about': 'about',
      'header.services': 'services',
      'header.team': 'team',
      'header.contact': 'contact'
    };

    // Navega utilizando a chave original (inglês)
    var route = routeMap[value] || value;
    if (route == 'header.home-page'){
      route = ''
    }
    console.log('Navigating to:', route);
    this.router.navigate([route]);
  }


}

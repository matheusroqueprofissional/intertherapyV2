import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLang = 'en'; // Idioma padrão

  constructor() {}

  getCurrentLanguage(): string {
    return this.currentLang;
  }

  setLanguage(lang: string): void {
    this.currentLang = lang;
    localStorage.setItem('language', lang); // Salva a escolha no localStorage
    this.reloadAppWithLanguage(lang);
  }

  private reloadAppWithLanguage(lang: string): void {
    const url = window.location.origin + `/${lang}/`;
    window.location.href = url; // Recarrega a aplicação com o novo idioma
  }

}

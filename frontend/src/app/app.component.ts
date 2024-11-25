import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  a: boolean = false; // Variável para controlar a exibição do header e footer

  // Lista de rotas onde o header e footer devem aparecer
  private allowedRoutes: string[] = [
    '/',
    '/about',
    '/services',
    '/team',
    '/contact',
    '/admin'
  ];

  constructor(
    private router: Router,
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: any // Identifica o ambiente (navegador ou servidor)
  ) {
    // Verifica se está no ambiente do navegador
    if (isPlatformBrowser(this.platformId)) {
      const userLang = navigator.language || 'en';
      const languageMap: { [key: string]: string } = {
        'en': 'EN-US',
        'pt': 'PT-BR',
      };
      const languageCode = userLang.split('-')[0];
      const mappedLang = languageMap[languageCode] || 'EN-US';
      this.translateService.setDefaultLang(mappedLang);
      this.translateService.use(mappedLang);
    }
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifica se a rota atual contém alguma das palavras na lista de rotas permitidas
        this.a = this.allowedRoutes.some(route => this.router.url.includes(route));
      }
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModuleModule } from '../../translate-module/translate-module.module';
// Fábrica do Loader para tradução
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json'); // Ajuste o caminho conforme necessário
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIcon,
    TranslateModuleModule, // Sem o `.forRoot` aqui
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'], // Corrigido o nome da propriedade
})
export class DashboardComponent {
  constructor(private translate: TranslateService) {
    // Definir o idioma padrão
    this.translate.setDefaultLang('english'); // Nome do arquivo JSON sem a extensão
    this.translate.use('english'); // Idioma ativo
  }
}

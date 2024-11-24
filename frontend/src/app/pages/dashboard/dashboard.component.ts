import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIcon,
    TranslateModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  imageSrc = '../../../assets/images/dashboard/dashboardKid.svg';

  constructor(private translateService: TranslateService) {
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

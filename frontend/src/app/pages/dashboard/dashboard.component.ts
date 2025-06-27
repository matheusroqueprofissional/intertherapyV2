import { Component, ViewEncapsulation } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TranslateModule,
    MatProgressSpinnerModule,
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent {

  imageSrc = '../../../assets/images/dashboard/dashboardKid.svg';

}

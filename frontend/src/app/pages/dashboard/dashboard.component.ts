import { Component, ViewEncapsulation } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgFor } from '@angular/common';
import { CarouselComponent } from "./carousel/carousel.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIcon,
    TranslateModule,
    MatProgressSpinnerModule,
    CarouselComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent {

  imageSrc = '../../../assets/images/dashboard/dashboardKid.svg';


  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/angular.jpg'
    };
    this.slides[1] = {
      src: './assets/img/react.jpg'
    };
    this.slides[2] = {
      src: './assets/img/vue.jpg'
    };
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

}

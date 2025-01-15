import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { OnInit } from '@angular/core';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag, TagModule } from 'primeng/tag';
import { Observable, of } from 'rxjs';
import { AboutService } from '../../shared/services/about.service';

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule,CarouselModule, ButtonModule, TagModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})



export class AboutComponent {


}

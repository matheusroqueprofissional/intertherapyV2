import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag, TagModule } from 'primeng/tag';
import { AboutService } from '../../services/about.service';

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
  selector: 'app-carousel',
  standalone: true,
  imports: [TranslateModule,CarouselModule, ButtonModule, TagModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  products: Product[]  = [];
  responsiveOptions: any[] | undefined;

constructor(private productService: AboutService) {}
  ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
          console.log(products);
            this.products = products;
        });

       this.responsiveOptions = [
            {
                breakpoint: '140px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '119px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ]
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
              return 'success';
        }
    }


}

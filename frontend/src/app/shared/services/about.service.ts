import { Injectable } from '@angular/core';
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
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  getProductsSmall(): Promise<Product[]> {
    const products: Product[] = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'BambooWatch',
            description: 'ProductDescription',
            image: 'bamboowatch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'BambooWatch',
          description: 'ProductDescription',
          image: 'bamboowatch.jpg',
          price: 65,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'BambooWatch',
        description: 'ProductDescription',
        image: 'bamboowatch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'BambooWatch',
      description: 'ProductDescription',
      image: 'bamboowatch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
  }

    ];

    return Promise.resolve(products);
}
}

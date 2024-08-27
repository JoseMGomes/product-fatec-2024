import { Product } from './../product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: Product[] = [
    { id: 1, name: 'Computador I7', price: 6000.0, category: 'Eletronicos' },
    { id: 1, name: 'Computador I5', price: 5000.0, category: 'Eletronicos' },
    { id: 1, name: 'Mouse', price: 100, category: 'Eletronicos' },
  ];
}

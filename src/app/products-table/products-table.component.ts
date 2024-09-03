import { Component } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
  products: Product[] = [
    { id: 1, name: 'Computador I7', price: 6000.0, category: 'Eletronicos' },
    { id: 1, name: 'Computador I5', price: 5000.0, category: 'Eletronicos' },
    { id: 1, name: 'Mouse', price: 100, category: 'Eletronicos' },
  ];
}

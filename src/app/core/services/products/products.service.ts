import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { Product } from '../../../models/product.model'
import { productsMock } from './mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = productsMock;

  constructor(
    // private http: HttpClient
  ) { }

  getProducts() {
    // return this.http.get('http://localhost:3000/api/products/');
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => Number(id) === item.id);
  }
}

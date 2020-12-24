import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  
  constructor(
    private productsService: ProductsService
  ) {
    this.products = productsService.getProducts();
  }
  
  ngOnInit(): void {
    // this.fetchProducts();
  }
  
  catchProductAddedToCart(id: number) {
    console.log(`Product ${id} added to cart.`);
  }

  // fetchProducts() {
  //   this.productsService.getProducts().subscribe(res => {
  //     console.log(res);
  //   })
  // }
}

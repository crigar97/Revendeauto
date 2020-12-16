import { Component, OnInit } from '@angular/core';
import productsFeed from './../data/products';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = productsFeed;
  
  constructor() { }
  
  ngOnInit(): void { }
  
  catchProductAddedToCart(id: number) {
    console.log(`Product ${id} added to cart.`);
  }
}

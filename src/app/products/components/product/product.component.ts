import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;
  @Output() addedToCart: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.product = {
      id: -1,
      title: '',
      description: '',
      img: '',
      price: 0
    }
  }

  addToCart() {
    let id = this.product.id;
    console.log(`Product ${this.product.id} added to cart.`);
    this.addedToCart.emit(id);
  }
}
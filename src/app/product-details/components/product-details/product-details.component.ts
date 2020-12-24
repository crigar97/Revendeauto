import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';

import { Product } from '../../../models/product.model';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.product = {
      id: -1,
      title: '',
      description: '',
      img: '',
      price: 0,
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      const productCatched = this.productService.getProduct(id);
      if (productCatched) {
        this.product = productCatched;
      }
    });
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CoreModule
  ]
})
export class ProductsModule { }

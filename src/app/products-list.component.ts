import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'products-list',
  template: `
  <div class="ui items">
    <product-row *ngFor="let myProduct of productList" 
       [product]="myProduct"
       (click)="clicked(myProduct)" 
       [class.selected]="isSelected(myProduct)"
    >
    </product-row>
  </div>
  `
})
export class ProductsListComponent {
  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter<Product>();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}

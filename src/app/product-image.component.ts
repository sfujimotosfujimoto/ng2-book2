import { Component, Input } from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'product-image',
  host: {class: 'ui small image'},
  template: `
    <img class="product-image" [src]="product.imageUrl">
  `,
  styles: []
})
export class ProductImageComponent {
  @Input() product: Product

  constructor() { }


}

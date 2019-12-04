import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product;
  @Input() buttonText: string;
  @Output() handleProduct: EventEmitter<Product> = new EventEmitter<Product>();

  onHandleProductClick() {
    this.handleProduct.emit(this.product);
  }
}


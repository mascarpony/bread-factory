import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  @Input() list: Observable<Product[]>;
  @Input() buttonText: string;
  @Output() handleProduct: EventEmitter<Product> = new EventEmitter<Product>();

  onHandleProductClick(product: Product) {
    this.handleProduct.emit(product);
  }
}

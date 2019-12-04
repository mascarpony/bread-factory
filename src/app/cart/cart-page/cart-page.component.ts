import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart: Observable<Product[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.cart = this.productsService.getCart();
  }

  onRemoveFromCart(product: Product) {
    this.productsService.removeFromCart(product);
  }
}

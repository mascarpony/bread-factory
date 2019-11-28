import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bread-factory';
  products: Observable<Product[]>;
  cart: Observable<Product[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.cart = this.productsService.getCart();
  }

  onAddToCart(product: Product) {
    this.productsService.addToCart(product);
  }

  onRemoveFromCart(product: Product) {
    this.productsService.removeFromCart(product);
  }
}

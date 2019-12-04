import { Injectable } from '@angular/core';
import { Product } from '../product';
import { BehaviorSubject, Observable, of } from 'rxjs';

const PRODUCTS: Product[] = [
  { id: 1, name: 'Bun' },
  { id: 2, name: 'Loaf' },
  { id: 3, name: 'Bagel' },
  { id: 4, name: 'Croissant' },
  { id: 5, name: 'Pretzel' }
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly products: Product[] = PRODUCTS;
  private cart: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id): Observable<Product> {
    return of(this.products.find(product => product.id === id));
  }

  getCart(): Observable<Product[]> {
    return this.cart.asObservable();
  }

  addToCart(product: Product): void {
    const cart = this.cart.getValue();
    const productIdx = cart.findIndex(item => item.id === product.id);
    if (productIdx !== -1) {
      cart[productIdx].quantity += 1;
    } else {
      cart.push({...product, quantity: 1});
    }
    this.cart.next(cart);
  }

  removeFromCart(cartItem: Product): void {
    this.cart.next(
      this.cart
        .getValue()
        .filter(item => item.id !== cartItem.id)
    );
  }
}

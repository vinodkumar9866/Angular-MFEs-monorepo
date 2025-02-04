import { Injectable } from '@angular/core';
import { AkitaCartStore } from './cart.store';
import { IProduct } from '../../interfaces/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private cartStore: AkitaCartStore) {}

  addToCart(product: IProduct) {
    this.cartStore.add(product);
  }

  removeFromCart(productId: number) {
    this.cartStore.remove(productId);
  }
}

import { inject, Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AkitaCartState, AkitaCartStore } from './cart.store';
import { IProduct } from '../../interfaces/product';

@Injectable({ providedIn: 'root' })
export class AkitaCartQuery extends QueryEntity<AkitaCartState, IProduct> {
  constructor() {
    super(inject(AkitaCartStore));
  }

  // Get all cart items
  getCartItems$ = this.selectAll();

  // Get cart item count
  getCartItemCount$ = this.selectCount();
}

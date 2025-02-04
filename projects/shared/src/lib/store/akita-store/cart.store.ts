import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IProduct } from '../../interfaces/product';

// Define state interface
export interface AkitaCartState extends EntityState<IProduct> {}

// Create the store
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Akita-cart' }) // Store name
export class AkitaCartStore extends EntityStore<AkitaCartState, IProduct> {
  constructor() {
    super();
  }
}

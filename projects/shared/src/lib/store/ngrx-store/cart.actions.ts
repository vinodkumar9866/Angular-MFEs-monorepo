import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../interfaces/product';

export const addToCart = createAction(
  '[Cart] Add Item',
  props<{ product: IProduct }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove Item',
  props<{ productId: number }>()
);

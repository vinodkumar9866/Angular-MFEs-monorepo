import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.store';

export const selectCartFeature = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartFeature,
  (state) => state.cartItems
);

export const selectCartItemCount = createSelector(
  selectCartFeature,
  (state) => state.cartItems.length
);

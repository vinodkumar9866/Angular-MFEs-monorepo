import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from './cart.actions';
import { CartState, initialCartState } from './cart.store';

export const cartReducer = createReducer(
  initialCartState,

  on(addToCart, (state, { product }) => ({
    ...state,
    cartItems: [...state.cartItems, product],
  })),

  on(removeFromCart, (state, { productId }) => ({
    ...state,
    cartItems: state.cartItems.filter((item) => item.id !== productId),
  }))
);

import { IProduct } from '../../interfaces/product';

export interface CartState {
  cartItems: IProduct[];
}

export const initialCartState: CartState = {
  cartItems: [],
};

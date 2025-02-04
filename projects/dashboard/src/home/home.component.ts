import { Component, computed, DoCheck, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { MatTooltipModule } from '@angular/material/tooltip';
import {
  addToCart,
  AkitaCartQuery,
  CardComponent,
  CartService,
  CartStoreService,
  CustomButtonComponent,
  FormatPricePipe,
  IProduct,
  normalizeImages,
  ProductService,
  removeFromCart,
  selectCartItems,
  // SearchResultService,
} from 'shared';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    CommonModule,
    CardComponent,
    MatTooltipModule,
    CustomButtonComponent,
    FormatPricePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, DoCheck {
  constructor(
    private productService: ProductService,
    private cartState: CartStoreService, // private searchService: SearchResultService

    // Akita store
    private cartQuery: AkitaCartQuery,
    private cartAkitaService: CartService,

    // NgRx store
    private store: Store
  ) {}

  // this is signal use of cart store from cartState
  // cartItems = computed(() => this.cartState.getCartItems());
  cartItems: IProduct[] = [];

  ngOnInit() {
    // using Akita query
    // this.cartQuery.getCartItems$.subscribe((items) => {
    //   this.cartItems = items;
    // });

    // using NgRx
    this.store.select(selectCartItems).subscribe((items) => {
      this.cartItems = items;
    });

    this.loadProducts();

    // Listen for updates and refresh products
    this.productService.onProductsUpdated().subscribe(() => {
      this.loadProducts();
    });
  }

  addToCart = (product: IProduct) => {
    if (this.isProductInCart(product)) return;

    // using cartState of signals store
    // this.cartState.addToCart(product);

    // using Akita service
    // this.cartAkitaService.addToCart(product);

    // using NgRx store
    this.store.dispatch(addToCart({ product }));
  };

  removeFromCart(product: IProduct) {
    // using cartState of signals store
    // this.cartState.removeFromCart(product);

    // using Akita service
    // this.cartAkitaService.removeFromCart(product.id);

    // using NgRx store
    this.store.dispatch(removeFromCart({ productId: product.id }));
  }

  isProductInCart(product: IProduct): boolean {
    return this.cartItems.some((item) => item.id === product.id);
  }

  bannerTitle = 'Welcome to Online Shopping';
  bannerSubTitle = 'Buy, sell, and exchange anything';
  products: IProduct[] = [];
  searchTerm = '';
  filteredProducts: IProduct[] = [];
  prevSearch = '';
  ngDoCheck() {
    if (this.searchTerm !== this.prevSearch) {
      this.prevSearch = this.searchTerm;
      this.filteredProducts = this.products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
      // this.searchService.emitEvent({
      //   searchTerm: this.searchTerm,
      //   TotalCount: this.filteredProducts.length,
      // });
      // custom-event communication between MFE's -  dashboard search to header
      window.dispatchEvent(
        new CustomEvent('searchUpdated', {
          detail: {
            searchTerm: this.searchTerm,
            totalCount: this.filteredProducts.length,
          },
        })
      );
    } else {
      this.products = [...this.products];
    }
  }

  private loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products.map((product) => ({
        ...product,
        images: normalizeImages(product.images),
      }));

      this.filteredProducts = this.products;
    });
  }
}

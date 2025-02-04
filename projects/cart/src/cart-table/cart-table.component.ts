import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import {
  AkitaCartQuery,
  CartService,
  CartStoreService,
  IProduct,
  removeFromCart,
  selectCartItems,
} from '../../../shared/src/public-api';

@Component({
  selector: 'cart-table',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.scss',
})
export class CartTableComponent implements OnInit, AfterViewInit {
  displayedColumns = ['title', 'description', 'price', 'creationAt', 'Actions'];

  dataSource = new MatTableDataSource<IProduct>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private cartService: CartStoreService,

    // Akita store
    private cartQuery: AkitaCartQuery,
    private cartAkitaService: CartService,

    // NgRx store
    private store: Store
  ) {
    // this is signal use of cart store from "cartService"
    //  Reactive updates when the cart changes
    // effect(() => {
    //   this.dataSource.data = this.cartService.getCartItems();
    // });
  }

  ngOnInit(): void {
    //  First-time initialization (using cartservice signals)
    // this.dataSource.data = this.cartService.getCartItems();

    //using Akita
    this.cartQuery.getCartItems$.subscribe((products) => {
      this.dataSource.data = products;
    });

    // using NgRx
    this.store.select(selectCartItems).subscribe((products) => {
      this.dataSource.data = products;
    });
  }

  ngAfterViewInit(): void {
    //  Ensure sorting & pagination are assigned **after view init**
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  removeFromCart(product: IProduct) {
    // this is cartService of signals
    // this.cartService.removeFromCart(product);

    // using Akita
    // this.cartAkitaService.removeFromCart(product.id);

    // using NgRx
    this.store.dispatch(removeFromCart({ productId: product.id }));
  }
}

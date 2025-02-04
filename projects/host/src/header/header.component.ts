import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import {
  AkitaCartQuery,
  CartStoreService,
  selectCartItemCount,
} from '../../../shared/src/public-api';

interface ISearch {
  searchTerm: string;
  totalCount: number;
}

@Component({
  selector: 'app-header',
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  title = 'Shopping';
  cartItemsCount = signal(0);
  search: ISearch = { searchTerm: '', totalCount: 0 };

  constructor(
    private cartState: CartStoreService,

    // Akita store
    private cartQuery: AkitaCartQuery,

    // NgRx store
    private store: Store
  ) {
    // this is signal use of cart store from cartState
    // effect(() => {
    //   this.cartItemsCount.set(this.cartState.getCartItemCount());
    // });
  }

  ngOnInit() {
    // Using Akita
    // this.cartQuery.getCartItemCount$.subscribe((count) => {
    //   this.cartItemsCount.set(count);
    // });

    // using NgRx
    this.store.select(selectCartItemCount).subscribe((count) => {
      this.cartItemsCount.set(count);
    });

    // custom-event communication between MFE's - header to dashboard search
    window.addEventListener('searchUpdated', this.handleSearchUpdate);
  }

  private handleSearchUpdate = (event: Event) => {
    const customEvent = event as CustomEvent<ISearch>;
    this.search = customEvent.detail;
  };

  ngOnDestroy() {
    window.removeEventListener('searchUpdated', this.handleSearchUpdate);
  }
}

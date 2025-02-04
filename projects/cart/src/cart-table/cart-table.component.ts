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
import { CartStoreService, IProduct } from 'shared';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

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

  constructor(private cartService: CartStoreService) {
    // ✅ Reactive updates when the cart changes
    effect(() => {
      this.dataSource.data = this.cartService.getCartItems();
    });
  }

  ngOnInit(): void {
    // ✅ First-time initialization
    this.dataSource.data = this.cartService.getCartItems();
  }

  ngAfterViewInit(): void {
    // ✅ Ensure sorting & pagination are assigned **after view init**
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  removeFromCart(product: IProduct) {
    this.cartService.removeFromCart(product);
  }
}

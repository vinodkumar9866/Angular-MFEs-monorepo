import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartTableComponent } from '../cart-table/cart-table.component';

@Component({
  selector: 'app-root',
  imports: [CartTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cart';
}

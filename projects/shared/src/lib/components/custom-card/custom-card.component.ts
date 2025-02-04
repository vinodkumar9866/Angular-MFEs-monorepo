import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IProduct } from '../../interfaces/product';
import { HilighterDirective } from '../../directives';

@Component({
  selector: 'shared-app-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule,
    RouterModule,
    MatTooltipModule,
    HilighterDirective,
  ],
})
export class CardComponent {
  @Input() product: IProduct = {} as IProduct;
  @Input() isProductInCart: boolean = false;
  @Output() addToCart = new EventEmitter<IProduct>();
  @Output() removeFromCart = new EventEmitter<IProduct>();

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  onRemoveFromCart() {
    this.removeFromCart.emit(this.product);
  }
}

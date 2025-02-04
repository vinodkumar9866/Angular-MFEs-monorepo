import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  standalone: true,
  imports: [MatButtonModule, CommonModule, RouterModule],
})
export class CustomButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() disabled: boolean = false;
  @Input() buttonClass: string = '';
  @Input() route: string = '';
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}

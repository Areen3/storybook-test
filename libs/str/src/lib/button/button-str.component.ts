import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-button-str',
  standalone: true,
  imports: [CommonModule],
  template: '<button (click)="onClick()">{{label}}</button>',
  styleUrl: './button-str.component.css',
})
export class ButtonStrComponent {
  @Input() label: string = 'Button';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  onClick(): void {
    this.clicked.emit();
  }
}

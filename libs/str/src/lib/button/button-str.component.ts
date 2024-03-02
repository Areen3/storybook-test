import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestInput } from '@storybook/str2';


@Component({
  selector: 'storybook-button-str',
  template: `
    <button
      type="button"
      (click)="myClick($event)"
      [disabled]="disabled"
      [ngStyle]="{'padding.px': data.padding }"
    >'{{ data.name }}'
    </button>`,
  styleUrl: './button-str.component.css'
})
export class ButtonStrComponent {
  @Input() data: TestInput = {
    name: 'Click me',
    padding: 10
  };
  @Input() disabled = false;
  @Output() clicked: EventEmitter<Event> = new EventEmitter<Event>();

  myClick(event: any): void {
    console.log('kliknięto str');
    this.clicked.emit(event);

  }
}

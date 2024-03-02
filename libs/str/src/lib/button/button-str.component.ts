import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestInput } from '@storybook/str2';



@Component({
  selector: 'storybook-button-str',
  templateUrl: './button-str.component.html',
  styleUrl: './button-str.component.css'
})
export class ButtonStrComponent {
  @Input() data: TestInput = {
    name: 'Click me',
    padding: 10
  }
  // @Input() text = 'Click me';
  // @Input() padding = 10;
  @Input() disabled = false;
  @Output() onClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.onClicked.emit('data');
    console.log('kliknięto');
  }
}

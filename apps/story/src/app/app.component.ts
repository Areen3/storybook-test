import { Component } from '@angular/core';

@Component({
  selector: 'storybook-root2',
  template: `<button (click)="onClick()"> aaa aadfasd</button>  <storybook-button-str>/<storybook-button-str>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'story';
  onClick(): void {
    console.log('jestem')
  }
}

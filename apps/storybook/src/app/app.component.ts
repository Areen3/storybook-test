import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CompModule } from '@storybook/comp';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CompModule],
  selector: 'storybook-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'storybook';
}

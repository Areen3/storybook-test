import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CompModule } from '@storybook/comp';
import { ButtonStrComponent } from '../../../../libs/str/src/lib/button/button-str.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CompModule, ButtonStrComponent],
  selector: 'storybook-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'storybook';
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonStrComponent } from './button/button-str.component';
import {Str2Module} from '@storybook/str2'
import ButtonComponent from './button-org/button.component';

@NgModule({
  imports: [
    CommonModule,
    Str2Module],
  declarations:[ButtonStrComponent, ButtonComponent],
  exports: [ButtonStrComponent, ButtonComponent]
})
export class CompModule {
}


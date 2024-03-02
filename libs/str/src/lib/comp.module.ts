import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonStrComponent } from './button/button-str.component';
import {Str2Module} from '@storybook/str2'

@NgModule({
  imports: [
    CommonModule,
    Str2Module],
  declarations:[ButtonStrComponent],
  exports: [ButtonStrComponent]
})
export class CompModule {
}


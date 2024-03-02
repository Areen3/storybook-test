import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBuilder } from './data-builder';

@NgModule({
  imports: [CommonModule],
  providers: [{ provide: DataBuilder} ]
})
export class Str2Module {}

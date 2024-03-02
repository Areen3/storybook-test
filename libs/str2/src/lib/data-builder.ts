import { Injectable } from '@angular/core';
import { TestInput } from './test-input.model';


@Injectable({ providedIn: 'root' })
export class DataBuilder {
  getData(): TestInput {
    return {
      name: 'Click meXXX',
      padding: 10
    };
  }

}



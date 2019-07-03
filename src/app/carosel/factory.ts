import { Type } from '@angular/core';

export class Factory {
  constructor(public component: Type<any>, public data: any) { }

}

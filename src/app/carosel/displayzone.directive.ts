import { Directive, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[slide-zone]'
})
export class DisplayzoneDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

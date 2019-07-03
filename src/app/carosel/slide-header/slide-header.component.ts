import { Component, OnInit, OnDestroy, Input, 
  ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DisplayzoneDirective } from '../displayzone.directive';
import { Factory } from '../factory';
import { HeaderComponentType } from '../header-interface';



@Component({
  selector: 'slide-header',
  templateUrl: './slide-header.component.html',
  styleUrls: ['./slide-header.component.scss']
})
export class SlideHeaderComponent implements OnInit, OnDestroy {
  currentIndex = -1;
  interval: any;
  @Input() slide: Factory[];
  @ViewChild(DisplayzoneDirective, {static: true}) displayZone: DisplayzoneDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    ) { }

  ngOnInit() {
    this.loadComponents();
    this.getComponent();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.interval);
  }
  loadComponents = () => {
    this.currentIndex = (this.currentIndex + 1) % this.slide.length;
    const headSlide = this.slide[this.currentIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(headSlide.component);

    const viewComponentRef = this.displayZone.viewContainerRef;
    viewComponentRef.clear();

    const componentRef = viewComponentRef.createComponent(componentFactory);
    (<HeaderComponentType>componentRef.instance).data = headSlide.data;
    // (<HeaderComponentType>componentRef.instance).headTitle = false;
  }
  getComponent = () => {
    this.interval = setInterval(() => {
      this.loadComponents();
    }, 15000);
  }
}

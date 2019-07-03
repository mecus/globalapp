import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slide-one',
  templateUrl: './slide-one.component.html',
  styleUrls: ['../sliders-component.scss']
})
export class SlideOneComponent implements OnInit {
  headTitle: boolean = false;
  @Input() data: any;
  constructor() { }

  ngOnInit() {
    // let ht: any = document.querySelector('.header-title');
    // setTimeout(() => {
    //   this.headTitle = true;
    //   ht.style.opacity = '1';
    //   ht.style.transition = '2s';
    // }, 3000);
  }
  ngAfterViewInit(){
    // let ht: any = document.querySelector('.header-title');
    // let page: any = document.querySelector('.content-one');
    // setTimeout(()=> {
    //   page.style.opacity = "1";
    //   page.style.transition = "1.5s";
    // }, 500);
    // setTimeout(() => {
    //   this.headTitle = true;
    //   ht.style.opacity = '1';
    //   ht.style.transition = '1.5s';
    // }, 1500);
  }
}

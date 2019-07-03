import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-two',
  templateUrl: './slide-two.component.html',
  styleUrls: ['../sliders-component.scss']
})
export class SlideTwoComponent implements OnInit {
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
    // let page: any = document.querySelector('.content-two');
    // setTimeout(()=> {
    //   page.style.opacity = "1";
    //   page.style.transition = "1.5s";
    // }, 500);
    // setTimeout(() => {
    //   ht.style.opacity = '1';
    //   ht.style.transition = '1.5s';
    // }, 1500);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'globalapp';

  goToto(){
    let scrollbehavior = 'scrollBehavior' in document.documentElement.style;
    let option = {
      "behavior": "smooth",
      "left": 0,
      "top": 0
    };
    if(scrollbehavior){
      window.scrollTo(option.left, option.top);
    }else{
      window.scrollTo(option.left, option.top);
    }

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    window.addEventListener('scroll', (e)=>{
      let yPos = window.pageYOffset;
      let stickmenu: any = document.querySelector(".main-nav-container");
      let header: any = document.querySelector(".home-container");
      let scrolT: any = document.querySelector(".scroll-up");
      if(yPos > 600){
       scrolT.style.opacity = "1";
      }else{
        scrolT.style.opacity = "0";
      }
      if(yPos > 40){
        stickmenu.style.position = "fixed";
        stickmenu.style.zIndex = "100";
        stickmenu.style.top = "0";
        stickmenu.style.transition = ".2s";
        header.style.marginTop = "80px";
      }else{
        stickmenu.style.position = "relative";
        stickmenu.style.top = "0";
        stickmenu.style.transition = ".2s";
        header.style.marginTop = "0px";
        // goTo.style.transition = "1s";
      }
    
    });
    
  }
}

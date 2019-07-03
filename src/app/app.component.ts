import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rippleColor = 'rgba(#f4bc16, 0.3)'; //'#ffffff';//'#f4bc16';
  constructor(){}

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
    window.addEventListener('scroll', (e)=>{
      let yPos = window.pageYOffset;
      let stickmenu: any = document.querySelector(".main-nav-container");
      let header: any = document.querySelector(".home-container");
      let scrolT: any = document.querySelector(".scroll-up");
      let device = window.screen.width;
      if(yPos > 600){
       scrolT.style.opacity = "1";
      }else{
        scrolT.style.opacity = "0";
      }
      if(yPos > 60){
        if(device < 768){
          return;
        }
        stickmenu.style.position = "fixed";
        stickmenu.style.zIndex = "100";
        stickmenu.style.top = "0";
        stickmenu.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        stickmenu.style.transition = ".2s";
        header.style.marginTop = "80px";
      }else{
        stickmenu.style.backgroundColor = "#ffffff";
        stickmenu.style.position = "relative";
        stickmenu.style.top = "0";
        stickmenu.style.transition = ".2s";
        header.style.marginTop = "0px";
      
      }
    
    });
    
  }
}

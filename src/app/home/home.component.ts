import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Navigation, NavigationEnd, Scroll} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderService } from '../carosel/header-service';
import { Factory } from '../carosel/factory';
import { firebase } from '../firebase-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  others: boolean = true;
  model: FormGroup;
  sliders: Factory[];
  constructor(private _router: Router, private fb: FormBuilder,
    private headerSlides: HeaderService) { 
    this.model = fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required, Validators.email,],
      message: [""]
    });
  }
 
  sendContact(val){
    // console.log(val);
    firebase.collection('contacts').add(val).then((data) => {
      console.log(data.id);
      this.model.reset();
    }).catch(err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.sliders = this.headerSlides.getSliders();
    this._router.events.subscribe((event) => {
      const ab: any = document.querySelector(".about-container");
      const sv: any = document.querySelector(".service-container");
      const cn: any = document.querySelector(".contact-container");
      const ts: any = document.querySelector(".testimony-container");
      const menu: any = document.querySelectorAll(".menu-item");
      for(let i = 0; i < menu.length; i++){
        menu[i].style.background = "transparent";
      }
      
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      if(event.url == "/#about"){
        // ab.style.marginTop = "80px";
        ab.style.transition = "0.2s";
        menu[1].style.backgroundColor = "#ff4081";
        console.log(menu[1]);
      }else{
        ab.style.marginTop = "0px";
        ab.style.transition = "0.2s";
      }

      if(event.url == "/#services"){
        menu[0].style.backgroundColor = "#ff4081";
        // sv.style.marginTop = "80px";
        sv.style.transition = "0.2s";

      }else{
        sv.style.marginTop = "0px";
        sv.style.transition = "0.2s";
      }

      if(event.url == "/#contact"){
        menu[2].style.backgroundColor = "#ff4081";
        // cn.style.marginTop = "80px";
        cn.style.transition = "0.2s";
 
      }else{
        cn.style.marginTop = "0px";
        cn.style.transition = "0.2s";
      }

      if(event.url == "/#testimony"){
        menu[3].style.backgroundColor = "#ff4081";
        // ts.style.marginTop = "80px";
        ts.style.transition = "0.2s";
    
      }else{
        ts.style.marginTop = "0px";
        ts.style.transition = "0.2s";
      }

      // window.addEventListener('scroll', (e)=>{
      //   let margins = [ab, sv, cn, ts];
      //   for(let i = 0; i < margins.length; i++){
      //     margins[i].style.marginTop = "0px";
      //   }
      // });
      // console.log(event);
      
      // window.scrollTo(0, 0)
      
      // this.window.setTimeout(function(){
      //   this.window.scrollTo(0, 1);
      //   }, 0);
    });
  }

}

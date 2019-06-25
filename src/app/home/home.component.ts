import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Navigation, NavigationEnd, Scroll} from "@angular/router";
import { FormBuilder, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  others: boolean = true;
  model: FormGroup;
  constructor(private _router: Router, private fb: FormBuilder) { 
    this.model = fb.group({
      name: [""],
      email: [""],
      message: [""]
    });
  }
  sendContact(val){
    console.log(val);
  }

  ngOnInit() {
    this._router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      if(event.url == "/#about"){
        console.log(event);
        const ab: any = document.querySelector(".about-container");
        ab.style.backgroundColor = "red";
        console.log(ab);
      }
      // console.log(event);
      
      // window.scrollTo(0, 0)
      
      // this.window.setTimeout(function(){
      //   this.window.scrollTo(0, 1);
      //   }, 0);
    });
  }

}

import { Injectable } from '@angular/core';
import { Factory } from './factory';
import { SlideTwoComponent } from './slide-two/slide-two.component';
import { SlideOneComponent } from './slide-one/slide-one.component';

@Injectable()
export class HeaderService {
    getSliders = () => {
        return [
            new Factory(SlideOneComponent, {
                name: "Header Slider One",
                image: "assets/images/slide-dark-red.jpg"
            }),
            new Factory(SlideTwoComponent, {
                name: "Another Header Slide",
                image: "assets/images/headerbg.jpg"
            })
        ]
    }
}
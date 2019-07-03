import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials.module';
import { HomeComponent } from './home/home.component';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SlideHeaderComponent } from './carosel/slide-header/slide-header.component';
import { DisplayzoneDirective } from './carosel/displayzone.directive';
import { SlideOneComponent } from './carosel/slide-one/slide-one.component';
import { SlideTwoComponent } from './carosel/slide-two/slide-two.component';
import { HeaderService } from './carosel/header-service';
const fa = [faLinkedin, faTwitter, faFacebook]
// library.add(fas, far);
library.add(...fa);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideHeaderComponent,
    DisplayzoneDirective,
    SlideOneComponent,
    SlideTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeaderService],
  entryComponents: [SlideOneComponent, SlideTwoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    
  }
 }

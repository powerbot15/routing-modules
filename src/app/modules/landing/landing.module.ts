import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthLandingComponent } from './components/unauth-landing/unauth-landing.component';



@NgModule({
  declarations: [
    UnauthLandingComponent
  ],
  exports: [
    UnauthLandingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }

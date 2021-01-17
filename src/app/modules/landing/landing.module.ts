import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthLandingComponent } from './components/unauth-landing/unauth-landing.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UnauthLandingComponent
  ],
  exports: [
    UnauthLandingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LandingModule { }

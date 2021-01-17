import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthLandingComponent } from './unauth-landing.component';

describe('UnauthLandingComponent', () => {
  let component: UnauthLandingComponent;
  let fixture: ComponentFixture<UnauthLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

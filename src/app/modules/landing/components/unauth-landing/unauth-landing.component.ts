import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-unauth-landing',
  templateUrl: './unauth-landing.component.html',
  styleUrls: ['./unauth-landing.component.scss']
})
export class UnauthLandingComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.dir(this.authService.getIsAuthenticated());
  }

  logIn(): void {
    this.authService.logIn();
  }

}

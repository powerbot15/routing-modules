import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.authService.logOut();
  }

}

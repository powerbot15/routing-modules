import { Injectable } from '@angular/core';
import { Router,  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService} from '../modules/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.authService.getIsAuthenticated();
    if (isAuthenticated) {
      this.router.navigateByUrl('dashboard');
      return false;
    } else {
      return true;
    }
  }

}

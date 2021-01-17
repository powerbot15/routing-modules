import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor(private router: Router) {
    const authData = localStorage.getItem('auth');
    if (authData) {
      this.isAuthenticated = JSON.parse(authData).isAuthenticated;
    }
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  logIn(): void {
    this.isAuthenticated = true;
    localStorage.setItem('auth', JSON.stringify({isAuthenticated: this.isAuthenticated}));
    this.router.navigateByUrl('dashboard');
  }

  logOut(): void {
    this.isAuthenticated = false;
    localStorage.setItem('auth', JSON.stringify({isAuthenticated: this.isAuthenticated}));
    this.router.navigateByUrl('');
  }
}

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardSevice {
  isAuthenticated = false;
  constructor(public router: Router) {}

  canActivate(): boolean {
    if (!this.isAuthenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

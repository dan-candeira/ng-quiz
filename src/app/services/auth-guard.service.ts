import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardSevice {
  isAuthenticated = false;
  constructor(public router: Router) {}

  canActivate(): boolean {
    if (!this.isAuthenticated) {
      return false;
    }
    return true;
  }
}

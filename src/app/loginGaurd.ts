// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersLocalstorageService } from './users-localstorage.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UsersLocalstorageService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.currentUser) {
      return true;
    } else {
      // Redirect to the login page or any other page
      this.router.navigate(['/login']);
      return false;
    }
  }
}

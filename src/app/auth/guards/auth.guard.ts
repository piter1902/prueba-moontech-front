import { CanActivateFn, Router } from '@angular/router';
import { constants } from '../../shared/constants/constants';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  // Get services
  const router = inject(Router);
  const authService = inject(AuthService);

  // Check localstorage for token
  const token = localStorage.getItem(constants.localStorage.tokenKey);
  const isLogged = token != null;

  if (!isLogged) {
    router.navigate(['auth', 'login']);
  }

  return isLogged;
};

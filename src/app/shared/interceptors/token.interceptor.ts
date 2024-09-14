import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { constants } from '../constants/constants';
import { ToastService } from '../services/toast.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly router: Router,
    private readonly toastService: ToastService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(constants.localStorage.tokenKey);

    const headers: any = {};

    if (token != null) {
      headers.authorization = `Bearer ${token}`;
    }

    const req = request.clone({
      setHeaders: headers,
    });

    return next.handle(req).pipe(
      catchError((err) => {
        this.toastService.addError(
          err?.error?.message ? err.error.message : err.message
        );

        if (err.status === 401) {
          // Remove token from localstorage
          localStorage.removeItem(constants.localStorage.tokenKey);
          this.router.navigate(['auth', 'login']);
        }

        return EMPTY;
      })
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginUserRequest } from '../models/login-user.request';
import { Observable, tap } from 'rxjs';
import { LoginUserResponse } from '../models/login-user.response';
import { constants } from '../../shared/constants/constants';

const BASE_PATH = 'auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private getUrl(path?: string): string {
    let url = `${environment.baseUrl}/${BASE_PATH}`;

    if (path) {
      url += `/${path}`;
    }

    return url;
  }

  loginUser(loginUser: LoginUserRequest): Observable<LoginUserResponse> {
    const url = this.getUrl('login');

    const req$ = this.http.post<LoginUserResponse>(url, loginUser).pipe(
      tap((token) => {
        // Save token to localstorage
        localStorage.setItem(
          constants.localStorage.tokenKey,
          token.access_token
        );
      })
    );

    return req$;
  }

  logoutUser(): Observable<never> {
    const url = this.getUrl('logout');

    const req$ = this.http.post<never>(url, null).pipe(
      tap(() => {
        // Delete token to localstorage
        localStorage.removeItem(constants.localStorage.tokenKey);
      })
    );

    return req$;
  }
}

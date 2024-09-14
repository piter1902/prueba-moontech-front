import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { CreateUser } from '../models/create-user.model';
import { UpdateUser } from '../models/update-user.model';

const BASE_PATH = 'users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private getUrl(path?: string): string {
    let url = `${environment.baseUrl}/${BASE_PATH}`;

    if (path) {
      url += `/${path}`;
    }

    return url;
  }

  getAllUsers(): Observable<User[]> {
    const url = this.getUrl();

    const req$ = this.http.get<User[]>(url);

    return req$;
  }

  getUserById(id: string): Observable<User> {
    const url = this.getUrl(id);

    const req$ = this.http.get<User>(url);

    return req$;
  }

  createUser(createUser: CreateUser): Observable<string> {
    const url = this.getUrl();

    const req$ = this.http.post<string>(url, createUser);

    return req$;
  }

  updateUser(id: string, updateUser: UpdateUser): Observable<string> {
    const url = this.getUrl(id);

    const req$ = this.http.put<string>(url, updateUser);

    return req$;
  }

  deleteUserById(id: string): Observable<never> {
    const url = this.getUrl(id);

    const req$ = this.http.delete<never>(url);

    return req$;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ConnectionLog } from '../models/connection-log.interface';

const BASE_PATH = 'connections';

@Injectable({
  providedIn: 'root',
})
export class ConnectionLogService {
  constructor(private http: HttpClient) {}

  private getUrl(path?: string): string {
    let url = `${environment.baseUrl}/${BASE_PATH}`;

    if (path) {
      url += `/${path}`;
    }

    return url;
  }

  getAllConnections(): Observable<ConnectionLog[]> {
    const url = this.getUrl();

    const req$ = this.http.get<ConnectionLog[]>(url);

    return req$;
  }
}

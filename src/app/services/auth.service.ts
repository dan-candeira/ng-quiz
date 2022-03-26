import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as credentials from '../../../credentials.json';

const URI = credentials.authUri;

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    return false;
  }

  authenticate(params): Observable<any> {
    return this.http.post(URI, params);
  }
}

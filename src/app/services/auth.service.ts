import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as credentials from '../credentials.json';

const URI = credentials.authUri;

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('quizTonken');
  }

  authenticate(params): Observable<any> {
    return this.http.post(URI, params);
  }

  login(token): void {
    localStorage.setItem('quizTonken', token);
    this.router.navigate(['']);
  }
}

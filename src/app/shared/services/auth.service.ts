import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const URI = environment.baseUri;

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('quizToken');
  }

  authenticate(params: any): Observable<any> {
    return this.http.post(`${URI}/auth`, params);
  }

  login(token: string): void {
    localStorage.setItem('quizToken', token);
    this.router.navigate(['']);
  }

  logout(): void {
    localStorage.removeItem('quizToken');
    this.router.navigate(['login']);
  }

  getToken(): string {
    return localStorage.getItem('quizToken') || '';
  }
}

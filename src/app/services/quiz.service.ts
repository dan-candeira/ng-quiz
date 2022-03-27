import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as credentials from '../credentials.json';
import { AuthService } from './auth.service';

const URI = credentials.baseUri;
const QUIZZES_URI =
  'quizzes?filter=team:623497e07ccb72a54717b9f4&fields=name,description,level,rewardXp,type';

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  loadQuizes(): Observable<any> {
    const header = new HttpHeaders().append('x-api-key', this.auth.getToken());
    return this.http.get(`${URI}/${QUIZZES_URI}`, {
      headers: header,
    });
  }
}

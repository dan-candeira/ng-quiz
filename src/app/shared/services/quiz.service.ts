import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

const URI = environment.baseUri;
const QUIZZES_URI = {
  filter: 'team:623497e07ccb72a54717b9f4',
  fields: ['name', 'description', 'level', 'rewardXp', 'type'],
};

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  loadQuizes(): Observable<any> {
    const header = new HttpHeaders().append('x-api-key', this.auth.getToken());
    const queryParams = '';
    return this.http.get(`${URI}/${QUIZZES_URI}`, {
      headers: header,
    });
  }
}

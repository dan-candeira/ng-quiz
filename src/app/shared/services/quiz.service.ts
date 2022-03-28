import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

const URI = environment.baseUri;
const QUERY_PARAMS = {
  filter: 'team:623497e07ccb72a54717b9f4',
  fields: ['name', 'description', 'level', 'rewardXp', 'type'],
};

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  loadQuizzes(): Observable<any> {
    const header = new HttpHeaders().append('x-api-key', this.auth.getToken());
    const queryParams = this.appendParams(QUERY_PARAMS);

    return this.http.get(`${URI}/quizzes`, {
      headers: header,
      params: queryParams,
    });
  }

  deleteQuizzes(): void {}

  appendParams(params: any): HttpParams {
    let queryParams = new HttpParams();

    Object.entries(params).forEach(([key, value]): any => {
      if (Array.isArray(value)) {
        value = value.join(',');
      } else {
        value = String(value);
      }

      queryParams = queryParams.append(key, value as any);
    });

    return queryParams;
  }
}

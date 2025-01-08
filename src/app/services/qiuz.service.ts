import { Injectable, inject } from '@angular/core';
import { ApiResponse } from '../model/quiz.model';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class QiuzService {
  http = inject(HttpClient);

  getQuestionFromApi(diff: string, cat: string) {
    // https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple
    const params = new HttpParams()
      .set('amount', '10')
      .set('type', 'multiple')
      .set('difficulty', diff)
      .set('category', cat);

    const baseUrl = `https://opentdb.com/api.php`;

    return this.http.get<ApiResponse>(baseUrl, { params });
  }

  constructor() {}
}

import { Injectable, inject } from '@angular/core';
import { ApiResponse } from '../model/quiz.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class QiuzService {
  http = inject(HttpClient);

  getQuestionFromApi() {
    const url = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;

    return this.http.get<ApiResponse>(url);
  }

  constructor() {}
}

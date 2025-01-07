import { Injectable, inject } from '@angular/core';
import { ApiResponse } from '../model/quiz.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class QiuzService {
  http = inject(HttpClient);

  getQuestionFromApi() {
    //base url = https://opentdb.com/api.php?amount=10&type=multiple

    const url = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;

    return this.http.get<ApiResponse>(url);
  }

  constructor() {}
}
/**
General Knowledge
Entertainment: Books
Entertainment: Film
Entertainment: Music
Entertainment: Musicals & Theatres
Entertainment: Television
Entertainment: Video Games
Entertainment: Board Games
Science & Nature
Science: Computers
Science: Mathematics
Mythology
Sports
Geography
History
Politics
Art
Celebrities
Animals
Vehicles
Entertainment:Comics
Scinece: Gadgets
Entertainment: Japanese Anime & Manga
Entertainment: Cartoon & Animations
 */

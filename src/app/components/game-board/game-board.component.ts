import { Component, inject, signal } from '@angular/core';
import { QuizResult } from '../../model/quiz.model';
import { QiuzService } from '../../services/qiuz.service';
import { catchError } from 'rxjs';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [NgFor],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
})
export class GameBoardComponent {
  quizService = inject(QiuzService);
  questions = signal<Array<QuizResult>>([]);
  currentIndex = signal<number>(0);
  currAnswers = signal<Array<string>>([]);
  ngOnInit(): void {
    this.quizService
      .getQuestionFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((res) => {
        this.questions.set(res.results);
        console.log(this.questions());
      });
  }

  get currentQuestion(): QuizResult | undefined {
    return this.questions()[this.currentIndex()];
  }

  shuffleAnswers(options: string[]): string[] {
    return options.sort(() => Math.random() - 0.5);
  }

  get currentQuestionAnswers(): string[] {
    return this.shuffleAnswers([
      ...(this.currentQuestion?.incorrect_answers ?? []), // Fallback to empty array
      ...(this.currentQuestion?.correct_answer
        ? [this.currentQuestion.correct_answer]
        : []), // Ensure it's an array
    ]);
  }
}

import { Component, inject, Input, signal } from '@angular/core';
import { QuizResult } from '../../model/quiz.model';
import { QiuzService } from '../../services/qiuz.service';
import { catchError } from 'rxjs';
import { NgClass, NgFor } from '@angular/common';
import { DecodePipePipe } from '../../pipes/decode-pipe.pipe';
import { EndGameModalComponent } from '../end-game-modal/end-game-modal.component';
import { ScoreService } from '../../services/score.service';
@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [NgFor, NgClass, DecodePipePipe, EndGameModalComponent],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
})
export class GameBoardComponent {
  constructor(private scoreService: ScoreService) {}
  quizService = inject(QiuzService);
  questions = signal<Array<QuizResult>>([]);
  currentIndex = signal<number>(0);
  currAnswers = signal<Array<string>>([]);
  isCorrect = signal<boolean | null>(null);
  selectedAnswerIndex: number | null = null;
  count: number = 0;
  inCorrectAnswer = signal<boolean | null>(null);
  correctAnswer: string = '';
  isGameOver: boolean = false;
  @Input() category!: string;
  @Input() difficulty!: string;

  ngOnInit(): void {
    this.quizService
      .getQuestionFromApi(this.difficulty, this.category)
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((res) => {
        this.questions.set(res.results);
        console.log(this.questions());
        this.loadCurrentQuestionAnswers();
      });
  }

  get currentQuestion(): QuizResult | undefined {
    return this.questions()[this.currentIndex()];
  }

  shuffleAnswers(options: string[]): string[] {
    return options.sort(() => Math.random() - 0.5);
  }

  loadCurrentQuestionAnswers(): void {
    if (this.currentQuestion) {
      this.currAnswers.set(
        this.shuffleAnswers([
          ...(this.currentQuestion.incorrect_answers ?? []),
          this.currentQuestion.correct_answer,
        ])
      );
    }
  }

  clickOnAnswer(a: string, index: number): void {
    this.selectedAnswerIndex = index;

    this.currentQuestion?.correct_answer === a
      ? this.isCorrect.set(true)
      : this.isCorrect.set(false);

    if (this.isCorrect() === true) {
      this.count = this.count + 1;
      this.scoreService.setScore(this.count);
      // console.log('Players scores: ' + this.count);
    } else if (
      this.isCorrect() === false &&
      this.currentQuestion?.correct_answer
    ) {
      this.correctAnswer = this.currentQuestion.correct_answer;
    }
    if (this.currentIndex() < this.questions().length - 1) {
      setTimeout(() => {
        this.nextquestion();
      }, 3000);
    } else {
      setTimeout(() => {
        this.isGameOver = true;
        console.log('Game over');
      }, 3000);
    }
  }

  nextquestion() {
    this.isCorrect.set(null);
    this.selectedAnswerIndex = null;
    this.currentIndex.set(this.currentIndex() + 1);
    this.loadCurrentQuestionAnswers();
  }
}

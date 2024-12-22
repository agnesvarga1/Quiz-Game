import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  private scoreSubject = new BehaviorSubject<number>(0);
  score$ = this.scoreSubject.asObservable();
  constructor() {}

  setScore(newScore: number): void {
    this.scoreSubject.next(newScore);
    console.log(this.scoreSubject.value);
  }

  // Getter for the score
  getScore(): number {
    console.log('from service: ' + this.scoreSubject.value);
    return this.scoreSubject.getValue();
  }
}

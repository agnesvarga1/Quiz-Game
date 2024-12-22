import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../services/score.service';
@Component({
  selector: 'app-game-header',
  standalone: true,
  imports: [],
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.scss',
})
export class GameHeaderComponent implements OnInit {
  constructor(private scoreService: ScoreService) {}
  score: number = 0;

  ngOnInit(): void {
    this.scoreService.score$.subscribe((updatedScore) => {
      this.score = updatedScore;
    });
  }
}

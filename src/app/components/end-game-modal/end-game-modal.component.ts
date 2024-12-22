import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-end-game-modal',
  standalone: true,
  imports: [],
  templateUrl: './end-game-modal.component.html',
  styleUrl: './end-game-modal.component.scss',
})
export class EndGameModalComponent {
  @Input() score: number | null = null;
}

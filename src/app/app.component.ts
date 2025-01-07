import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { StartGameComponent } from './components/start-game/start-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    GameHeaderComponent,
    GameBoardComponent,
    StartGameComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Quiz-Game';
  isStarted: boolean = false;
}

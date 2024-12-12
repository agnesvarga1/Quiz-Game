import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, GameHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Quiz-Game';
}

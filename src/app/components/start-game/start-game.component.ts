import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { TriviaCategory } from '../../model/category.model';
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-start-game',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.scss',
})
export class StartGameComponent {
  catService = inject(CategoryService);
  categories = signal<Array<TriviaCategory>>([]);
  selectedCategory: string = '';
  selectedDifficulty: string = '';
  start: boolean = false;
  @Output() submitEvent = new EventEmitter<{
    category: string;
    difficulty: string;
    start: boolean;
  }>();
  ngOnInit(): void {
    this.catService
      .getCategories()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((res) => {
        this.categories.set(res.trivia_categories);
      });
  }
  onSubmit() {
    this.start = true;
    this.submitEvent.emit({
      category: this.selectedCategory,
      difficulty: this.selectedDifficulty,
      start: this.start,
    });
  }
}

import { Injectable,inject } from '@angular/core';
import {TriviaCategoriesResponse} from '../model/category.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   http = inject(HttpClient);

   getCategories(){
    const url = 'https://opentdb.com/api_category.php';

    return this.http.get<TriviaCategoriesResponse>(url);
   }
  constructor() { }
}

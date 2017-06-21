import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
new Recipe('test recipe', 'a sample test descprition', 'http://www.hardcoreitalians.com/uploads/1/5/1/6/15169552/3493826_orig.jpg'),
new Recipe('another test recipe', 'a sample test descprition', 'http://www.hardcoreitalians.com/uploads/1/5/1/6/15169552/3493826_orig.jpg')
];
  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
 }
}

import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('test recipe',
      'a sample test descprition', 'http://www.hardcoreitalians.com/uploads/1/5/1/6/15169552/3493826_orig.jpg', [
        new Ingredient('Meat', 1),
        new Ingredient('buns', 2),
      ]
    ),
    new Recipe('another test recipe',
      'a sample test description', 'http://www.hardcoreitalians.com/uploads/1/5/1/6/15169552/3493826_orig.jpg',
      [
        new Ingredient('steak', 1),
        new Ingredient('french fries', 2),
      ])
  ];
  constructor(private slService: ShoppingListService) { }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number){
     return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
  }
}

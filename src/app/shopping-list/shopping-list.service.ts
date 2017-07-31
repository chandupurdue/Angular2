import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
ingredientsChanged = new Subject<Ingredient[]>();
startedEditing = new Subject<number>();

private ingredients: Ingredient[] = [
     new Ingredient('Apples', 500),
     new Ingredient('tomatoes', 50),
   ];
   getIngredients() {
     return this.ingredients.slice();
   }
addIngredient(ingredient: Ingredient) {
   this.ingredients.push(ingredient);
   this.ingredientsChanged.next(this.ingredients.slice());
    }
addIngredients(ingredients: Ingredient[]) {
this.ingredients.push(...ingredients);
this.ingredientsChanged.next(this.ingredients.slice());
}
}

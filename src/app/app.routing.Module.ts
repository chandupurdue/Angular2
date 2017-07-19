import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';

const appRoutes: Routes = [
{path : '' , redirectTo : 'recipe',  pathMatch: 'full'},
{path : 'recipes' , component : RecipeComponent, children: [
   {path: '', component : RecipeStartComponent},
   {path: ':id', component : RecipeDetailComponent}
] },
{path : 'shopping-list' , component : ShoppingListComponent},
]
@NgModule({
imports : [RouterModule.forRoot(appRoutes)],
exports : [RouterModule]
})
export class AppRoutingComponent {

}



import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test','https://upload.wikimedia.org/wikipedia/commons/7/75/Diabetic_Carrot_Cake_Recipe_Best.jpg'),
        new Recipe('A Test Recipe', 'This is simply a test','https://upload.wikimedia.org/wikipedia/commons/7/75/Diabetic_Carrot_Cake_Recipe_Best.jpg')
    ];
    
    constructor(){

    }

    ngOnInit(){

    }
}
import { Component } from "@angular/core";
import { Category } from "../models/category";
import { CategoryService } from "../services/category.service";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html'
})

export class CategoryComponent{

    operation: string = 'none';
    category: Category = {id: 0, name : ''}; 

    constructor(private categoryService: CategoryService){
    }

    getCategory(id: string): void{
        this.categoryService.getCategory(parseInt(id)).subscribe(
            (cat:Category) => {
                this.category = cat;
                this.operation = 'GET';
            }
        )
    }
}
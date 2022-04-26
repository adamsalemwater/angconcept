import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";

@Injectable()
export class CategoryService{

    endPoint: string = "/api";

    constructor(private cathttp: HttpClient){
    }

    getCategory(id: number): Observable<Category>{
        return this.cathttp.get<Category>(this.endPoint + '/category/' + id);
    }

    getAllCategory(): Observable<Category[]>{
        return this.cathttp.get<Category[]>(this.endPoint + '/category');
    }
}
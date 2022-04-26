import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Product} from '../models/product';
import { Observable } from "rxjs";

@Injectable()
export class ProductService{

    endPoint:string =  '/api';
    
    constructor(private myhttp: HttpClient){
    }
   
    getProduct (id: number): Observable<Product>{
        return this.myhttp.get<Product>(this.endPoint +  "/product/"+ id);
    }

    postProduct (product: Product): Observable<Product>{
        let stringProduct = JSON.stringify(product);
        return this.myhttp.post<Product>(this.endPoint + "/product", product);
    }

    deleteProduct (id: number): Observable<Product>{
        return this.myhttp.delete<Product>(this.endPoint +  "/product/"+ id);
    }
}   


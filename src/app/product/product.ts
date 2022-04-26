import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.html'
})

export class ProductComponent {
      
  operation: string = 'none';
  product: Product =  {productId: 2, productName: 'anything', productPrice: 2.5};

  constructor(private productService: ProductService){
  }

  getProduct(id:string):void{
    this.productService.getProduct(parseInt(id)).subscribe(
        (px:Product) => {
          this.product = px;
          this.operation = 'GET'
        })
    console.log('product in cmp');
    console.dir(this.product);
  }

  postProduct(id:string):void{
    let newProd:Product = {productId:parseInt(id), productName: 'Bleech',productPrice: 5.50};
    this.productService.postProduct(newProd).subscribe( 
      (p) => {
        this.product = p;
        this.operation = 'POST';
    })
  }

  deletProduct(id:string):void{
    this.productService.deleteProduct(parseInt(id)).subscribe(
      (p:Product) => {
        this.product = p;
        this.operation = 'DELETE';
      })
    console.log('product in cmp');
    console.dir(this.product);
  }
}


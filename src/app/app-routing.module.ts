import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { InnerComponent } from './inner/inner';
import { OuterComponent } from './outer/outer';
import { ProductComponent } from './product/product';

const routes: Routes = [
  {path:"product", component:ProductComponent},
  {path:"outer", component:OuterComponent},
  {path:"inner", component:InnerComponent},
  {path:"category", component:CategoryComponent},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

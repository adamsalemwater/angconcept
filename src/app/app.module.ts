import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { InnerComponent } from './inner/inner';
import { OuterComponent } from './outer/outer';
import { ProductComponent } from './product/product';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    OuterComponent,
    InnerComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title:string = '';
  
  constructor(){
    this.title = 'Root Application';
  }

  changeme(value:string):void{
    this.title = value;
  }

  // void changeme(String value){
  //  this.title = value;
  }



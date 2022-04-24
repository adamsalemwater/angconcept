import { Component } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.html',
  styleUrls: []
})

export class OuterComponent {

    passToInner:string = "passing to inner";

  constructor(){
  }

  changeme(value:string):void{
    this.passToInner = value;
  }

  // void changeme(String value){
  //  this.title = value;
  }



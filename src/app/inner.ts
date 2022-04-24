import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.html',
  styleUrls: []
})

export class InnerComponent {

  @Input()
  innerVar: string ="";

  constructor(){
  }

  // changeme(value:string):void{
  //   this.title = value;
  // }

  // void changeme(String value){
  //  this.title = value;
  }



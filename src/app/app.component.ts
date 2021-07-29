import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';
  numero: number = 0;
  base: number = 5;


  constructor() {
    // this.add()
  }


  acumular(valor: number) {
    this.numero += valor

  }

  // Regular function
  oven(rawNoodle, spices, water) {
    let cookednoododles = "sth";
    return cookednoododles;
  }

  // Arrow function

  ovenArrow = (rawNoodle, spices, water) => {
    let cookednoododles = "sth";

    return cookednoododles;
  }

  // is there just a syntax diference or more ?
  // impicit means automatic; no need to type that code

  /*  the syntax returns the value implicity when there is no {} block, 
      we dont need to type return keyword above
      Curly brackets not needed  if only one expression is present
      Hence, a single liner function is possible
      */

  addition = (number: number) => number + 3;


  add() {
    this.numero += 1;
  }

  rest() {
    this.numero -= 1;
  }



}

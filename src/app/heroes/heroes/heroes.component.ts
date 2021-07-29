import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironamn', 'Hulk'];
  deletedHeroe: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addHeroe() {
    this.heroes.push('Lobo');
  }

  deleteHeroe(index: number) {
    //  delete this.heroes[index];
    this.deletedHeroe = this.heroes.shift() || '';
  }

}


import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h3>
        La base es: <strong>{{ base }}</strong>
        </h3>
        <button (click)="acumular(base)">+{{ base }}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base)">-{{ base }}</button>
        <button (click)="numero = 0">Reset</button>`,
    styles: [`* {
            font-family: Helvetica, Arial, sans-serif;
            font-weight: 200;
          }
          
          html,
          body {
            background: white;
            margin: 20px;
            color: #3e4144;
            -webkit-font-smoothing: antialiased;
          }
          
          dd {
            font-weight: bold;
          }
          
          button {
            background-color: black;
            border-radius: 5px;
            border: 0px;
            color: white;
            cursor: pointer;
            margin-right: 5px;
            margin-left: 5px;
            padding: 5px 10px;
          }
          
          button:hover {
            background-color: #3e4144;
          }
          
          button:focus {
            outline: none;
          }
          
          .p-1 {
            padding: 1px;
          }
          `]
})

export class ContadorComponent {
    title = 'Counter App';
    numero: number = 0;
    base: number = 5;

    constructor() {
        console.log("Contador component construido");
    }

    acumular(valor: number) {
        this.numero += valor

    }

}


//Ocupara decorador
import { Component } from '@angular/core';
//Clase simple
@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <!-- doble llaver permite -->
    <!-- <h1>{{ 2 + 22 }}</h1> -->
    <!-- <h1>Hello World</h1> -->

    <!-- Evento click() -->
    <button (click)="acumular(+1)">+ 1</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-1)">- 1</button>

    <!-- Tarea Suma Resta 5 en 5 -->

    <!-- <h3> La base es: <strong>{{base}}</strong></h3> -->
    <h3>La base es: <strong>5</strong></h3>

    <!-- Evento2 click() -->
    <button (click)="contador('+')">+ 5</button>
    <span>{{ base }}</span>
    <button (click)="contador('-')">- 5</button>

    <!-- Evento click() -->
    <h3>
      Base es: <strong>{{ base }}</strong>
    </h3>

    <!-- Evento2 click() -->
    <button (click)="acum(base)">+ {{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acum(-base)">- {{ base }}</button>
  `,
})



export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }

  contador(valor: string) {
    if (valor === '+') {
      this.base += 5;
    } else {
      this.base -= 5;
    }
  }

  acum(valor: number) {
    this.numero += valor;
  }
}

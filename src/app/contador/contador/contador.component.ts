import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  template: ` <h1>{{ title }}</h1>
    <h3>
      la base es: <strong>{{ base }}</strong>
    </h3>
    <button (click)="acumular(+base)">+{{ base }}</button>
    <p>{{ numero }}</p>
    <button (click)="acumular(-base)">-{{ base }}</button>`,
})
export class contadorComponent {
  title = 'Contador App';
  numero: number = 0;
  base: number = 5;
  acumular(valor: number) {
    this.numero += valor;
  }
}

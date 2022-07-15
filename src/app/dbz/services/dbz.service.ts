import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz-interfaces';

@Injectable({
  providedIn: 'root',
})
export class dbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 20000,
    },

    {
      nombre: 'Vegeta',
      poder: 6000,
    },
  ];
  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  constructor() {}
  agregarPersonaje(data: Personaje) {
    this._personajes.push(data);
  }
}

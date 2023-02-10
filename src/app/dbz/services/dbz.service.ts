import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

//puede inyectar por esto se diferencia el decorador
@Injectable()
export class DbzService {
  //arreglo de personajes
  private _personajes: Personaje[] = [
    //creamos personajes
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  get personajes(): Personaje[] {
    // ... rompe la referencia con los datos solicitados
    return [...this._personajes];
  }

  //Orden
  //Propiedades-
  //GetSetters
  //Constructores
  //Métodos

  constructor() {}

  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
  }
}

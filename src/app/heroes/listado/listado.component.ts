import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  //arreglo de heroes
  heroes: string[]=['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán America'];
  heroeBorrado: string = '';


  borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || '';

  }

}



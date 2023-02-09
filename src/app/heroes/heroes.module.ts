import { NgModule } from '@angular/core';


import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    //componentes que hay en el file heroes
    HeroeComponent,
    ListadoComponent,
  ],
  //que cosas quiero que sean visibles
  exports: [
    ListadoComponent
  ],
  imports: [
    //objetos que se importan en los modulos || Aqui van solo módulos
    CommonModule

  ],
})
export class HeroesModule {}

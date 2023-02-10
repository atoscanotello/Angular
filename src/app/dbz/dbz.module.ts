//Primero de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Importaciones de terceros

//Los propios
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations:
   [
    MainPageComponent,
     PersonajesComponent,
      AgregarComponent],
  exports:
  [
    MainPageComponent
  ],
  imports:
   [CommonModule
    ,FormsModule
  ],
  providers: [
    //aqui se ponen todos los servicios que se necesitan
    DbzService
  ]
})
export class DbzModule {}

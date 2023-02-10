import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// import { ContadorComponent } from './contador/contador/contador.component';
//Tarea_
//Crear un módulo llamado ContadorModulo
//Declaraciones, y exportaciones

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,

  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     HeroesModule,
     ContadorModule,
     DbzModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ServicioRestAvionesService } from "./servicio-rest-aviones.service";
import { DatosProtegidosService } from "./datos-protegidos.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule
  ],
  providers: [ DatosProtegidosService,
                ServicioRestAvionesService 
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }

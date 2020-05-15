import { Component, OnInit } from '@angular/core';
import { ServicioRestAvionesService } from "../servicio-rest-aviones.service";
import { Avion, datosDevueltos } from "../avion";

@Component({
  selector: 'app-listado-aviones',
  templateUrl: './listado-aviones.component.html',
  styleUrls: ['./listado-aviones.component.css']
})
export class ListadoAvionesComponent implements OnInit {


  aviones : Avion[];  
 
  constructor(private servicioRest:ServicioRestAvionesService) { }

  ngOnInit(): void {
    this.servicioRest.ObtenerAviones()
        .subscribe((response)=> {
          console.log(response);         
          this.aviones = (response as datosDevueltos).data;  
        })
  }

}

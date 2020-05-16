import { Component, OnInit } from '@angular/core';
import { ServicioRestAvionesService } from "../servicio-rest-aviones.service";
import { Avion, datosDevueltos } from "../avion";
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-listado-aviones',
  templateUrl: './listado-aviones.component.html',
  styleUrls: ['./listado-aviones.component.css']
})
export class ListadoAvionesComponent implements OnInit {


  aviones: Avion[];
  error: boolean = false;

  constructor(private servicioRest: ServicioRestAvionesService) { }

  ngOnInit(): void {
    this.servicioRest.ObtenerAviones()
      .subscribe((response: datosDevueltos) => {
        this.aviones = response.data;
      },
        (error) => {
          this.error = true;
        })
  }

  

}

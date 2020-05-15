import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DatosProtegidosService } from "./datos-protegidos.service";


@Injectable({
  providedIn: 'root'
})
export class ServicioRestAvionesService {

  constructor(private http: HttpClient, private direcciones : DatosProtegidosService ) { }

  
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoAvionesComponent } from './listado-aviones/listado-aviones.component';


const routes: Routes = [ { path: '', component: ListadoAvionesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

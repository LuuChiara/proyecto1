import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/inicio/inicio.component';
import { EquipoComponent } from './page/equipo/equipo.component';
import { ServiciosComponent } from './page/servicios/servicios.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { CasosExitoComponent}from './page/casos-exito/casos-exito.component';

const routes: Routes = [
  //rutas
  {path:'inicio', component:InicioComponent},
  {path:'equipo', component:EquipoComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'casos_exito', component:CasosExitoComponent},
  {path:'', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

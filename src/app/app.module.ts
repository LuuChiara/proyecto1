import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PageComponent } from './page/page.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { EquipoComponent } from './page/equipo/equipo.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { CasosExitoComponent } from './page/casos-exito/casos-exito.component';
import { ServiciosComponent } from './page/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PageComponent,
    InicioComponent,
    EquipoComponent,
    ContactoComponent,
    CasosExitoComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

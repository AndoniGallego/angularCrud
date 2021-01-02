import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioCrearComponent } from './formulario-crear/formulario-crear.component';
import { FormularioLeerComponent } from './formulario-leer/formulario-leer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioCrearComponent,
    FormularioLeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

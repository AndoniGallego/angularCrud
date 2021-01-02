import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Angular Crud';

  msg: string = '';

  empleadosLista: any;

  onEmpleados(empleadoslistado: any){
    this.empleadosLista = empleadoslistado;
  }

  onMensaje(mensaje: string){
    this.msg = mensaje;
  }
}

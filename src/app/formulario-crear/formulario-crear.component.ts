import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-crear',
  templateUrl: './formulario-crear.component.html',
  styleUrls: ['./formulario-crear.component.css']
})
export class FormularioCrearComponent {

  model: any = {};
  msg: string = "";

  empleados = [
    {name: 'Jorge', position: 'Programador', email:'jorgito10@gmail.com'}
  ];

  @Output() mensaje = new EventEmitter<string>();
  @Output() listado = new EventEmitter<any>();

  addEmployee():void {
    this.empleados.push(this.model);
    this.model = {};
    this.msg = "Empleado Agregado";
    this.listado.emit(this.empleados);

  }

}

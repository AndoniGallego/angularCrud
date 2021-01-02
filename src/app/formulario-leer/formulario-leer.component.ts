import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-leer',
  templateUrl: './formulario-leer.component.html',
  styleUrls: ['./formulario-leer.component.css']
})
export class FormularioLeerComponent {


  @Input() empleados: any;

  model2:any = {};
  msg: string = "";

  deleteEmployee(i: number):void {
      this.empleados.splice(i, 1);
      this.msg = 'Empleado borrado.';
  }

}

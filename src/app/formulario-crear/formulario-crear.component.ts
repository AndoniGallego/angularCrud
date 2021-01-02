import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-crear',
  templateUrl: './formulario-crear.component.html',
  styleUrls: ['./formulario-crear.component.css']
})
export class FormularioCrearComponent implements OnInit{

  formulario:FormGroup;
  msg: string = "";
  empleados = [];

  @Output() mensaje = new EventEmitter<string>();
  @Output() listado = new EventEmitter<any>();

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.formulario = this.formBuilder.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  addEmployee():void {

    const object = {
      name: this.formulario.value['name'],
      position: this.formulario.value['position'],
      email: this.formulario.value['email'],
    }

    this.empleados.push(object);
    this.msg = "Empleado Agregado";
    this.listado.emit(this.empleados);

  }

}

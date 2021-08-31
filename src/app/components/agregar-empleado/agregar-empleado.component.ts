import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  formularioEmpleados: FormGroup;

  constructor(public formulario: FormBuilder, private crudService: CrudService, private rooter: Router) {
    this.formularioEmpleados = this.formulario.group({
      nombre: [''],
      correo: ['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatos(): void {
    console.log(this.formularioEmpleados.value);
    this.crudService.agregarEmpleado(this.formularioEmpleados.value).subscribe();
    this.rooter.navigateByUrl('/listar-empleado');
  }

}

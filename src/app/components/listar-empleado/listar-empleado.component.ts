import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
  empleados: any;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.listarEmpleados().subscribe(
      (respuesta) => { 
        console.table(respuesta);
        this.empleados = respuesta
      }
      )
  }

  borrarRegistro(empleadoID: number, index: number): void{
    console.log(empleadoID)
  }

}

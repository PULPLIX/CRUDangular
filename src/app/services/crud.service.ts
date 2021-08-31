import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/Empleado';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType': 'text'
  }),
};

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  apiUrl: string = 'http://localhost/empleados/';

  constructor(private clienteHTTP: HttpClient) { }

  agregarEmpleado(datosEmpleado: Empleado): Observable<Empleado> {
    return this.clienteHTTP.post<Empleado>(this.apiUrl + "?insertar=1", datosEmpleado)
  }
  listarEmpleados(): Observable<Empleado> {
    return this.clienteHTTP.get<Empleado>(this.apiUrl);
  }
  eliminarEmpleado(empleadoID: number): Observable<Empleado> {
    return this.clienteHTTP.get<Empleado>(this.apiUrl + "?borrar=" + empleadoID)
  }
}

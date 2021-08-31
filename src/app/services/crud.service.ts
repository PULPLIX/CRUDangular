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

  agregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    return this.clienteHTTP.post(this.apiUrl + "?insertar=1", datosEmpleado)
  }
  listarEmpleados(): Observable<Empleado>{
    return this.clienteHTTP.get<Empleado>(this.apiUrl);
  }
}

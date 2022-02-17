import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Empleado } from '../interfaces/empleado.interface';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs'


//Emerson


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  BASE_URL:string ='http://localhost:3000/demografico/';
  constructor(private http:HttpClient) { }

  getAllEmpleados(){

   return this.http.get<any>(`${this.BASE_URL}`) 
      
  }
  crearEmpleado(datosEmpleado:Empleado):Observable<any>{
    
    return this.http.post<Empleado>(`${this.BASE_URL}`,datosEmpleado);
    console.log(datosEmpleado);
  }
}

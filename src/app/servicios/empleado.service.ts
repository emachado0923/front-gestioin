import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Empleado } from '../interfaces/empleado.interface';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  BASE_URL:string ='http://localhost:3000/demografico/';
  constructor(private http:HttpClient) { }

  getAllEmpleados(){

   return this.http.get<any>(`${this.BASE_URL}`) 
      
  }
  crearEmpleado(empleado:Empleado):Observable<any>{
    
    return this.http.post(`${this.BASE_URL}`,empleado);
  }
}

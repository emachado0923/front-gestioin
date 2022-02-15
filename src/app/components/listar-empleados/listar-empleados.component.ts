import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {

  public emple:Empleado[]=[];
  constructor(private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.getAllEmpleados()
    .subscribe(resp=>{
      console.log(resp['data'])
      // console.log(resp['data']);
      this.emple=resp['data'];
      return this.emple;
    })
  }

}

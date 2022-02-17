import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
import {Router} from '@angular/router';
import {Empleado} from '../../interfaces/empleado.interface';
import {FormGroup,FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.css']
})

export class CrearEmpleadosComponent implements OnInit  {
  formularioEmpleado:FormGroup; 



  constructor(private empleadoService:EmpleadoService, public formulario:FormBuilder) {
    this.formularioEmpleado=this.formulario.group({
      nombres:'',
      apellidos:'',
      correoElectronico:'',
      cedula:'',
      genero:'',
      fechaNacimiento:'',
      lugarNacimiento:'',
      direccion:'',
      municipio:'',
      barrio:'',
      estrato:'',
      telefono:'',
      tipoVivienda:'',
      estadoCivil:'',
      nivelFormacion:'',
      tituloObtenido:'',
      nombreConyuge:'',
      //tieneHijos:'',
      condicionEspecial:'',
      especifique:''

    }); 
   }

  //  crearHijos(){
  //   this.checked=!false;
  //   return this.checked;
  // }

  ngOnInit(): void {
  }

  // onSubmit(){
  //   this.empleadoService.crearEmpleado(this.empleado)
  //   .subscribe(
  //     res=>{
  //       this.empleado=res;
  //     },
  //     err=>{console.log(err);
  //     console.log(this.empleado);
  //     });
  // }
  enviarEmpleado(){
    
    this.empleadoService.crearEmpleado(this.formularioEmpleado.value).subscribe(resp=>console.log(resp.headers));
    
  }

}
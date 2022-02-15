import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadosComponent } from './components/crear-empleados/crear-empleados.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'crear-empleado',component:CrearEmpleadosComponent},
  {path:'empleado',component:ListarEmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

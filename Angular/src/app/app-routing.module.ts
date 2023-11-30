import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablaColegioComponent } from './tabla-colegio/tabla-colegio.component';
import { FormSedeComponent } from './form-sede/form-sede.component';
import { FormSedeActComponent } from './form-sede-act/form-sede-act.component';

import { TablaDirectorComponent } from './tabla-director/tabla-director.component';
import { FormDirectorActComponent } from './form-director-act/form-director-act.component';
import { FormDirectorComponent } from './form-director/form-director.component';

import { TablaAlumnoComponent } from './tabla-alumno/tabla-alumno.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { FormAlumnoActComponent } from './form-alumno-act/form-alumno-act.component';

import { TablaSalonComponent } from './tabla-salon/tabla-salon.component';
import { FormSalonComponent } from './form-salon/form-salon.component';
import { FormSalonActComponent } from './form-salon-act/form-salon-act.component';

const routes: Routes = [
  {path:'listar', component:TablaColegioComponent },
  {path:'ingresar', component:FormSedeComponent},
  {path:'actualizar', component:FormSedeActComponent},

  {path:'listarDir', component:TablaDirectorComponent },
  {path:'ingresarDir', component:FormDirectorComponent },
  {path:'actualizarDir', component:FormDirectorActComponent},

  {path:'listarAlum', component:TablaAlumnoComponent},
  {path:'ingresarAlum', component:FormAlumnoComponent},
  {path:'actualizarAlum', component:FormAlumnoActComponent},

  {path:'listarSalon', component:TablaSalonComponent},
  {path:'ingresarSalon', component:FormSalonComponent},
  {path:'actualizarSalon', component:FormSalonActComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

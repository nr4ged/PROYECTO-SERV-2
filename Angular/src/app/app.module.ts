import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TablaColegioComponent } from './tabla-colegio/tabla-colegio.component';

import { FormSedeComponent } from './form-sede/form-sede.component';
import { FormSedeActComponent } from './form-sede-act/form-sede-act.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDirectorComponent } from './form-director/form-director.component';
import { FormDirectorActComponent } from './form-director-act/form-director-act.component';
import { TablaDirectorComponent } from './tabla-director/tabla-director.component';
import { TablaSalonComponent } from './tabla-salon/tabla-salon.component';
import { TablaAlumnoComponent } from './tabla-alumno/tabla-alumno.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { FormAlumnoActComponent } from './form-alumno-act/form-alumno-act.component';
import { FormSalonComponent } from './form-salon/form-salon.component';
import { FormSalonActComponent } from './form-salon-act/form-salon-act.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaColegioComponent,
    FormSedeComponent,
    FormSedeActComponent,
    FormDirectorComponent,
    FormDirectorActComponent,
    TablaDirectorComponent,
    TablaSalonComponent,
    TablaAlumnoComponent,
    FormAlumnoComponent,
    FormAlumnoActComponent,
    FormSalonComponent,
    FormSalonActComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

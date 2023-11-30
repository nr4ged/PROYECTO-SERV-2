import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private urlApi='Alumno/listar';
  private urlApiPost='Alumno/ingresar';
  private urlApiDelete='Alumno/eliminar/'
  private urlApiObtener='Alumno/obtener/';
  private urlApiPut='Alumno/actualizar'
  idAlum="";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public guardarDataAlumno(data:any){
    console.log(data);
    return this.http.post(this.urlApiPost,data);
  }

  public eliminarAlumno(idAlum:string){
    console.log(idAlum);
    return this.http.delete(this.urlApiDelete+idAlum)
  }

  public obtenerAlumno(){
    console.log(this.idAlum);
    return this.http.get<any>(this.urlApiObtener+this.idAlum);
  }

  public actualizarAlumno(data:any){
    console.log(data);
    return this.http.put(this.urlApiPut, data);

  }

}

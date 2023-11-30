import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SedeService {

private urlApi='Sede/listar';
  private urlApiPost='Sede/ingresar';
  private urlApiDelete='Sede/eliminar/'
  private urlApiObtener='Sede/obtener/';
  private urlApiPut='Sede/actualizar'
  id="";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public guardarDataSede(data:any){
    console.log(data);
    return this.http.post(this.urlApiPost,data);
  }

  public eliminarSede(id:string){
    console.log(id);
    return this.http.delete(this.urlApiDelete+id)
  }

  public obtenerSede(){
    console.log(this.id);
    return this.http.get<any>(this.urlApiObtener+this.id);
  }

  public actualizarSede(data:any){
    console.log(data);
    return this.http.put(this.urlApiPut, data);

  }
}

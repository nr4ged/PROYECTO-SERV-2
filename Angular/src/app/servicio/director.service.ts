import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private urlApi='Director/listar';
  private urlApiPost='Director/ingresar';
  private urlApiDelete='Director/eliminar/'
  private urlApiObtener='Director/obtener/';
  private urlApiPut='Director/actualizar'
  idDirector="";

  constructor(private http:HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public guardarDataDirector(data:any){
    console.log(data);
    return this.http.post(this.urlApiPost,data);
  }

  public eliminarDirector(idDirector:string){
    console.log(idDirector);
    return this.http.delete(this.urlApiDelete+idDirector)
  }

  public obtenerDirector(){
    console.log(this.idDirector);
    return this.http.get<any>(this.urlApiObtener+this.idDirector);
  }

  public actualizarDirector(data:any){
    console.log(data);
    return this.http.put(this.urlApiPut, data);

  }
}

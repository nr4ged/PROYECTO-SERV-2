import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SalonService {

  private urlApi='Salon/listar';
  private urlApiPost='Salon/ingresar';
  private urlApiDelete='Salon/eliminar/'
  private urlApiObtener='Salon/obtener/';
  private urlApiPut='Salon/actualizar'
  idSalon="";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public guardarDataSalon(data:any){
    console.log(data);
    return this.http.post(this.urlApiPost,data);
  }

  public eliminarSalon(idSalon:string){
    console.log(idSalon);
    return this.http.delete(this.urlApiDelete+idSalon)
  }

  public obtenerSalon(){
    console.log(this.idSalon);
    return this.http.get<any>(this.urlApiObtener+this.idSalon);
  }

  public actualizarSalon(data:any){
    console.log(data);
    return this.http.put(this.urlApiPut, data);

  }

}

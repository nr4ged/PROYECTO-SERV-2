import { Component, OnInit } from '@angular/core';
import { AlumnoEntity } from '../modelo/alumno-entity';
import { AlumnoService } from '../servicio/alumno.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabla-alumno',
  templateUrl: './tabla-alumno.component.html',
  styleUrls: ['./tabla-alumno.component.css']
})
export class TablaAlumnoComponent implements OnInit{

  data: any[]=[];
  AlumnoArray: AlumnoEntity[]=[];
  constructor(private apiService:AlumnoService, private router:Router){}

  ngOnInit(): void {
    this.llenarData();


  }

  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      this.AlumnoArray=data;
      console.log(this.data);
    })
  }
  nuevo(){
    this.router.navigate(["ingresarAlum"]);
  }

  actualizar(idAlum:string){
    console.log(idAlum);
    this.apiService.idAlum=idAlum;
    this.router.navigate(["actualizarAlum"]);
  }
  
  eliminar(idAlum:string){
    console.log(idAlum);
    this.apiService.eliminarAlumno(idAlum).subscribe(
  
      (result=>{
  
        console.log(result);
        this.llenarData();
  
      })
    );
    this.llenarData();
  }

}

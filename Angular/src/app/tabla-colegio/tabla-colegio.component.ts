import { Component, OnInit } from '@angular/core';
import { SedeService } from '../servicio/sede.service';
import { SedeEntity } from '../modelo/sede-entity';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabla-colegio',
  templateUrl: './tabla-colegio.component.html',
  styleUrls: ['./tabla-colegio.component.css'],
})
export class TablaColegioComponent implements OnInit{

  data: any[]=[];
  SedeArray: SedeEntity[]=[];
  constructor(private apiService:SedeService, private router:Router){}

  ngOnInit(): void {
      this.llenarData();
  }
  
  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      this.SedeArray=data;
      console.log(this.data);
    })
  }

  nuevo(){
    this.router.navigate(["ingresar"]);
  }

  actualizar(id:string){
    console.log(id);
    this.apiService.id=id;
    this.router.navigate(["actualizar"]);
  }

  eliminar(id:string){
    console.log(id);
    this.apiService.eliminarSede(id).subscribe(
 
      (result=>{

        console.log(result);
        this.llenarData();

      })
    );
    this.llenarData();
  }
}

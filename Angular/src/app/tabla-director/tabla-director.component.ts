import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../servicio/director.service';
import { DirectorEntity } from '../modelo/director-entity'
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabla-director',
  templateUrl: './tabla-director.component.html',
  styleUrls: ['./tabla-director.component.css']
})
export class TablaDirectorComponent implements OnInit{

  data: any[]=[];
  DirectorArray: DirectorEntity[]=[];
  constructor(private apiService:DirectorService, private router:Router){}

  ngOnInit(): void {
    this.llenarData();
}

llenarData(){
  this.apiService.getData().subscribe(data=>{
    this.data=data;
    this.DirectorArray=data;
    console.log(this.data);
  })
}
nuevo(){
  this.router.navigate(["ingresarDir"]);
}

actualizar(idDirector:string){
  console.log(idDirector);
  this.apiService.idDirector=idDirector;
  this.router.navigate(["actualizarDir"]);
}

eliminar(idDirector:string){
  console.log(idDirector);
  this.apiService.eliminarDirector(idDirector).subscribe(

    (result=>{

      console.log(result);
      this.llenarData();

    })
  );
  this.llenarData();
}

}

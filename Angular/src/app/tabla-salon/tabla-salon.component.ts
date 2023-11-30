import { Component, OnInit } from '@angular/core';
import { SalonEntity } from '../modelo/salon-entity';
import { SalonService } from '../servicio/salon.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabla-salon',
  templateUrl: './tabla-salon.component.html',
  styleUrls: ['./tabla-salon.component.css']
})
export class TablaSalonComponent implements OnInit{

  data: any[]=[];
  SalonArray: SalonEntity[]=[];
  constructor(private apiService:SalonService, private router:Router){}

  ngOnInit(): void {
    this.llenarData();


  }

  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      this.SalonArray=data;
      console.log(this.data);
    })
  }
  nuevo(){
    this.router.navigate(["ingresarSalon"]);
  }

  actualizar(idSalon:string){
    console.log(idSalon);
    this.apiService.idSalon=idSalon;
    this.router.navigate(["actualizarSalon"]);
  }
  
  eliminar(idSalon:string){
    console.log(idSalon);
    this.apiService.eliminarSalon(idSalon).subscribe(
  
      (result=>{
  
        console.log(result);
        this.llenarData();
  
      })
    );
    this.llenarData();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SedeEntity } from '../modelo/sede-entity';
import { SedeService } from '../servicio/sede.service';

@Component({
  selector: 'app-form-sede-act',
  templateUrl: './form-sede-act.component.html',
  styleUrls: ['./form-sede-act.component.css']
})
export class FormSedeActComponent implements OnInit{

  frmSede=new FormGroup({
    id: new FormControl(''),
    distrito: new FormControl(''),
    provincia: new FormControl(''),
    cantMax: new FormControl(''),
    cantSalones: new FormControl(''),
    director: new FormControl('')
    
  })

  sede:SedeEntity=new SedeEntity();

  constructor(private sedeService:SedeService, private router:Router){


  }

  guardarSede(){
    this.sedeService.actualizarSede(this.frmSede.value).subscribe((result)=>{
      console.log(result);
      this.frmSede.reset();
      this.router.navigate(["listar"]);
    })
  }

  ngOnInit(): void {
      
  }

  llenarData(){
    this.sedeService.obtenerSede().subscribe(data=>{
      this.sede=data;
      console.log(this.sede);
      this.frmSede.controls["id"].setValue(this.sede.id);
      this.frmSede.controls["distrito"].setValue(this.sede.distrito);
      this.frmSede.controls["provincia"].setValue(this.sede.provincia);
      this.frmSede.controls["cantMax"].setValue(this.sede.cantMax);
      this.frmSede.controls["cantSalones"].setValue(this.sede.cantSalones);
      this.frmSede.controls["director"].setValue(this.sede.director);
    })
  }
}



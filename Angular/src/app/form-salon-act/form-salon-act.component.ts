import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalonService } from '../servicio/salon.service';
import { SalonEntity } from '../modelo/salon-entity';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-salon-act',
  templateUrl: './form-salon-act.component.html',
  styleUrls: ['./form-salon-act.component.css']
})
export class FormSalonActComponent implements OnInit{

  frmSalon=new FormGroup({
    idSalon: new FormControl(''),
    profesor: new FormControl(''),
    nmroAlum: new FormControl(''),
    curso: new FormControl(''),
    sede: new FormControl('')
    
  })

  salon:SalonEntity=new SalonEntity();

  constructor(private salonService:SalonService, private router:Router){


  }

  guardarSalon(){
    this.salonService.actualizarSalon(this.frmSalon.value).subscribe((result)=>{
      console.log(result);
      this.frmSalon.reset();
      this.router.navigate(["listarSalon"]);
    })
  }

  ngOnInit(): void {
      
  }

  llenarData(){
    this.salonService.obtenerSalon().subscribe(data=>{
      this.salon=data;
      console.log(this.salon);
      this.frmSalon.controls["idSalon"].setValue('');
      this.frmSalon.controls["profesor"].setValue(this.salon.profesor);
      this.frmSalon.controls["nmroAlum"].setValue(this.salon.nmroAlum);
      this.frmSalon.controls["curso"].setValue(this.salon.curso);
      this.frmSalon.controls["sede"].setValue(this.salon.sede);
    })
  }

}

import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { SedeEntity } from '../modelo/sede-entity';
import { SedeService } from '../servicio/sede.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form-sede',
  templateUrl: './form-sede.component.html',
  styleUrls: ['./form-sede.component.css']
})
export class FormSedeComponent {

  frmSede=new FormGroup({
    id: new FormControl(''),
    distrito: new FormControl(''),
    provincia: new FormControl(''),
    cantMax: new FormControl(''),
    cantSalones: new FormControl(''),
    director: new FormControl('')
  })

  constructor(private sedeService: SedeService, private router:Router){}

  guardarSede(){
    console.log(this.frmSede.value);
    this.sedeService.guardarDataSede(this.frmSede.value).subscribe((result)=>{
      console.log(result);
      this.frmSede.reset();
      this.router.navigate(["listar"]);
    })
  }

  OnInit(): void {

  }

  
  
}

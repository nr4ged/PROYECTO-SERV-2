import { Component } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';
import { SalonEntity } from '../modelo/salon-entity';
import { SalonService } from '../servicio/salon.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form-salon',
  templateUrl: './form-salon.component.html',
  styleUrls: ['./form-salon.component.css']
})

export class FormSalonComponent {

  frmSalon=new FormGroup({
    idSalon: new FormControl(''),
    profesor: new FormControl(''),
    nmroAlum: new FormControl(''),
    curso: new FormControl(''),
    sede: new FormControl('')
  })

  constructor(private salonService: SalonService, private router:Router){}

  guardarSalon(){
    console.log(this.frmSalon.value);
    this.salonService.guardarDataSalon(this.frmSalon.value).subscribe((result)=>{
      console.log(result);
      this.frmSalon.reset();
      this.router.navigate(["listarSalon"]);
    });
  }

  OnInit(): void {

  }

}

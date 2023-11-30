import { Component } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';
import { AlumnoEntity } from '../modelo/alumno-entity';
import { AlumnoService } from '../servicio/alumno.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent {

  frmAlumno=new FormGroup({
    idAlum: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    dni: new FormControl(''),
    salon: new FormControl('')
  })

  constructor(private alumnoService: AlumnoService, private router:Router){}

  guardarAlumno(){
    console.log(this.frmAlumno.value);
    this.alumnoService.guardarDataAlumno(this.frmAlumno.value).subscribe((result)=>{
      console.log(result);
      this.frmAlumno.reset();
      this.router.navigate(["listarAlum"]);
    })
  }

  OnInit(): void {

  }


}

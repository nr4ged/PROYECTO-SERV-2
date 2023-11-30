import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoEntity } from '../modelo/alumno-entity';
import { AlumnoService } from '../servicio/alumno.service';

@Component({
  selector: 'app-form-alumno-act',
  templateUrl: './form-alumno-act.component.html',
  styleUrls: ['./form-alumno-act.component.css']

})

export class FormAlumnoActComponent implements OnInit{

  frmAlumno=new FormGroup({
    idAlum: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl (''),
    dni: new FormControl (''),
    salon: new FormControl ('')
    
  })

  alumno:AlumnoEntity=new AlumnoEntity();

  constructor(private alumnoService:AlumnoService, private router:Router){


  }

  guardarAlumno(){
    this.alumnoService.actualizarAlumno(this.frmAlumno.value).subscribe((result)=>{
      console.log(result);
      this.frmAlumno.reset();
      this.router.navigate(["listarAlum"]);
    })
  }

  ngOnInit(): void {

  }

  llenarData(){
    this.alumnoService.obtenerAlumno().subscribe(data=>{
      this.alumno=data;
      console.log(this.alumno);
      this.frmAlumno.controls["idAlum"].setValue(this.alumno.idAlum);
      this.frmAlumno.controls["nombre"].setValue(this.alumno.nombre);
      this.frmAlumno.controls["apellido"].setValue(this.alumno.apellido);
      this.frmAlumno.controls["edad"].setValue(this.alumno.edad);
      this.frmAlumno.controls["dni"].setValue(this.alumno.dni);
      this.frmAlumno.controls["salon"].setValue(this.alumno.salon);
    })
  }

}

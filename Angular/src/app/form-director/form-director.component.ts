import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'
import { DirectorEntity } from '../modelo/director-entity';
import { DirectorService } from '../servicio/director.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-director',
  templateUrl: './form-director.component.html',
  styleUrls: ['./form-director.component.css']
})
export class FormDirectorComponent {

  frmDirector=new FormGroup({
    idDirector: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    dni: new FormControl('')
  })

  constructor(private directorService: DirectorService, private router:Router){}

  guardarDirector(){
    console.log(this.frmDirector.value);
    this.directorService.guardarDataDirector(this.frmDirector.value).subscribe((result)=>{
      console.log(result);
      this.frmDirector.reset();
      this.router.navigate(["listarDir"]);
    })
  }



  OnInit(): void {

  }
}

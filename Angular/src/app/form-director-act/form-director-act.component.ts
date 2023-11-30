import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DirectorService } from '../servicio/director.service';
import { DirectorEntity } from '../modelo/director-entity';

@Component({
  selector: 'app-form-director-act',
  templateUrl: './form-director-act.component.html',
  styleUrls: ['./form-director-act.component.css']
  
})
export class FormDirectorActComponent implements OnInit {

  frmDirector=new FormGroup({
    idDirector: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl('')
    
  })

  director:DirectorEntity=new DirectorEntity();

  constructor(private directorService:DirectorService, private router:Router){


  }

  guardarDirector(){
    this.directorService.actualizarDirector(this.frmDirector.value).subscribe((result)=>{
      console.log(result);
      this.frmDirector.reset();
      this.router.navigate(["listarDir"]);
    })
  }

  ngOnInit(): void {

  }
}
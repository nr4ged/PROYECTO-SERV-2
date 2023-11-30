package com.proyecto.apps.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.apps.Model.Alumno;
import com.proyecto.apps.Service.AlumnoService;

@RestController
public class AlumnoController {
	
	@Autowired
	private AlumnoService servicioAlumno;
	
	@GetMapping("Alumno/listar")
	public List<Alumno>listarAlumno(){
		return servicioAlumno.listarAlumno();
	}

	@PostMapping("Alumno/ingresar")
	@ResponseBody
	public Alumno ingresarAlumno(@RequestBody Alumno objAlumno) {
		objAlumno.getIdAlum();
		objAlumno.getNombre();
		objAlumno.getApellido();
        objAlumno.getEdad();
        objAlumno.getDni();
		objAlumno.getSalon();

		return servicioAlumno.ingresarAlumno(objAlumno);
	}
	
	@PutMapping("Alumno/actualizar")
	@ResponseBody 
	public Alumno actualizarAlumno(@RequestBody Alumno objAlumno) {
		Alumno tmpAlumno = servicioAlumno.obtenerAlumno(objAlumno.getIdAlum());
		tmpAlumno.setNombre(objAlumno.getNombre());
		tmpAlumno.setApellido(objAlumno.getApellido());
		tmpAlumno.setEdad(objAlumno.getEdad());
		tmpAlumno.setDni(objAlumno.getDni());
		tmpAlumno.setSalon(objAlumno.getSalon());

		return servicioAlumno.actualizarAlumno(tmpAlumno);
	}

	@GetMapping("Alumno/obtener/{idAlum}")
	public Alumno obtenerAlumno(@PathVariable String idAlum) {

		return servicioAlumno.obtenerAlumno(idAlum);
	}
	
	@DeleteMapping("Alumno/eliminar/{idAlum}")

	public void eliminarAlumno (@PathVariable String idAlum) {
		Alumno objAlumno = servicioAlumno.obtenerAlumno(idAlum);
	    servicioAlumno.eliminarAlumno(objAlumno);
	}

}

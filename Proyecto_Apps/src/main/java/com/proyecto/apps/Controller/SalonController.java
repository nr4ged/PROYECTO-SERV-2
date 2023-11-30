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

import com.proyecto.apps.Model.Salon;
import com.proyecto.apps.Service.SalonService;

@RestController
public class SalonController {
	
	@Autowired
	private SalonService servicioSalon;
	
	@GetMapping("Salon/listar")
	public List<Salon>listarSalon(){
		return servicioSalon.listarSalon();
	}
	
	
	@PostMapping("Salon/ingresar")
	@ResponseBody
	public Salon ingresarSalon(@RequestBody Salon objSalon) {
		objSalon.getIdSalon();
		objSalon.getProfesor();
		objSalon.getNmroAlum();
        objSalon.getCurso();
        objSalon.getSede();

		return servicioSalon.ingresarSalon(objSalon);
	}
	
	@PutMapping("Salon/actualizar")
	@ResponseBody 
	public Salon actualizarSalon(@RequestBody Salon objSalon) {
		Salon tmpSalon = servicioSalon.obtenerSalon(objSalon.getIdSalon());
		tmpSalon.setProfesor(objSalon.getProfesor());
		tmpSalon.setNmroAlum(objSalon.getNmroAlum());
		tmpSalon.setCurso(objSalon.getCurso());
		tmpSalon.setSede(objSalon.getSede());

		return servicioSalon.actualizarSalon(tmpSalon);
	}
	
	@GetMapping("Salon/obtener/{id}")
	public Salon obtenerSalon(@PathVariable String idSalon) {

		return servicioSalon.obtenerSalon(idSalon);
	}
	
	@DeleteMapping("Salon/eliminar/{idSalon}")

	public void eliminarSalon (@PathVariable String idSalon) {
		Salon objSalon = servicioSalon.obtenerSalon(idSalon);
	    servicioSalon.eliminarSalon(objSalon);
	}

}

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

import com.proyecto.apps.Model.Sede;
import com.proyecto.apps.Service.SedeService;

@RestController
public class SedeController {
	@Autowired
	private SedeService servicioSede;
	
	@GetMapping("Sede/listar")
	public List<Sede>listarSede(){
		return servicioSede.listarSede();
	}
	
	@PostMapping("Sede/ingresar")
	@ResponseBody
	public Sede ingresarVehiculo(@RequestBody Sede objSede) {
		objSede.getId();
        objSede.getDistrito();
        objSede.getProvincia();
        objSede.getCantMax();
		objSede.getCantSalones();
        objSede.getDirector();

		return servicioSede.ingresarSede(objSede);
	}
	
	@PutMapping("Sede/actualizar")
	@ResponseBody 
	public Sede actualizarSede(@RequestBody Sede objSede) {
		Sede tmpSede = servicioSede.obtenerSede(objSede.getId());
		tmpSede.setDistrito(objSede.getDistrito());
		tmpSede.setProvincia(objSede.getProvincia());
		tmpSede.setCantMax(objSede.getCantMax());
		tmpSede.setCantSalones(objSede.getCantSalones());
		tmpSede.setDirector(objSede.getDirector());

		return servicioSede.actualizarSede(tmpSede);
	}

	@GetMapping("Sede/obtener/{id}")
	public Sede obtenervehiculo(@PathVariable String id) {

		return servicioSede.obtenerSede(id);
	}
	
	@DeleteMapping("Sede/eliminar/{id}")

	public void eliminarSede (@PathVariable String id) {
		Sede objSede = servicioSede.obtenerSede(id);
	    servicioSede.eliminarSede(objSede);
	}

}

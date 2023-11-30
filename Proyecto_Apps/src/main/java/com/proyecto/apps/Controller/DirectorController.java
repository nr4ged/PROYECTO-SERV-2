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

import com.proyecto.apps.Model.Director;
import com.proyecto.apps.Service.DirectorService;

@RestController
public class DirectorController {

	@Autowired
	private DirectorService servicioDirector;
	
	@GetMapping("Director/listar")
	public List<Director>listarDirector(){
		return servicioDirector.listarDirector();
	}
	
	@PostMapping("Director/ingresar")
	@ResponseBody
	public Director ingresarDirector(@RequestBody Director objDirector) {
		objDirector.getIdDirector();
        objDirector.getNombre();
        objDirector.getApellido();

		return servicioDirector.ingresarDirector(objDirector);
	}
	
	@PutMapping("Director/actualizar")
	@ResponseBody 
	public Director actualizarDirector(@RequestBody Director objDirector) {
		Director tmpDirector = servicioDirector.obtenerDirector(objDirector.getIdDirector());
		tmpDirector.setNombre(objDirector.getNombre());
		tmpDirector.setApellido(objDirector.getApellido());

		return servicioDirector.actualizarDirector(tmpDirector);
	}

	@GetMapping("Director/obtener/{id}")
	public Director Director(@PathVariable String idDirector) {

		return servicioDirector.obtenerDirector(idDirector);
	}
	
	@DeleteMapping("Director/eliminar/{idDirector}")

	public void eliminarDirector (@PathVariable String idDirector) {
		Director objDirector = servicioDirector.obtenerDirector(idDirector);
	    servicioDirector.eliminarDirector(objDirector);
	}

}

package com.proyecto.apps.Service;

import java.util.List;

import com.proyecto.apps.Model.Director;


public interface DirectorService {
	
public List<Director>listarDirector();
	
	public Director obtenerDirector(String idDirector);

	public Director ingresarDirector(Director objDirector);
	
	public Director actualizarDirector(Director objDirector);
	
	public void eliminarDirector(Director objDirector);
	
	public List<Director>listarDirectorNombre(String nombre);

}

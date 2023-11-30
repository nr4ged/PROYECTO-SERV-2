package com.proyecto.apps.Service;

import java.util.List;

import com.proyecto.apps.Model.Salon;

public interface SalonService {
	
	public List<Salon>listarSalon();
	
	public Salon obtenerSalon(String idSalon);

	public Salon ingresarSalon(Salon objSalon);
	
	public Salon actualizarSalon(Salon objSalon);
	
	public void eliminarSalon(Salon objSalon);
	
	public List<Salon>listarProfesorNombre(String profesor);


}

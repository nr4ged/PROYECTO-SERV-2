package com.proyecto.apps.Service;

import java.util.List;
import com.proyecto.apps.Model.Sede;

public interface SedeService {
	
	public List<Sede>listarSede();
	
	public Sede obtenerSede(String id);

	public Sede ingresarSede(Sede objSede);
	
	public Sede actualizarSede(Sede objSede);
	
	public void eliminarSede(Sede objSede);	
	
	public List<Sede>listarSedeDistrito(String distrito);

}

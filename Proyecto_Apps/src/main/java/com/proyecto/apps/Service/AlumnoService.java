package com.proyecto.apps.Service;

import java.util.List;

import com.proyecto.apps.Model.Alumno;

public interface AlumnoService {
	
	public List<Alumno>listarAlumno();
	
	public Alumno obtenerAlumno(String idAlum);

	public Alumno ingresarAlumno(Alumno objAlumno);
	
	public Alumno actualizarAlumno(Alumno objAlumno);
	
	public void eliminarAlumno(Alumno objAlumno);
	
	public List<Alumno>listarAlumnoNombre(String nombre);

}

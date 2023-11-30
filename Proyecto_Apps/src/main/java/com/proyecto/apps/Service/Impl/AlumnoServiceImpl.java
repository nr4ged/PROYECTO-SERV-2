package com.proyecto.apps.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.apps.Model.Alumno;
import com.proyecto.apps.Repository.AlumnoRepository;
import com.proyecto.apps.Service.AlumnoService;

@Service
public class AlumnoServiceImpl implements AlumnoService{

	@Autowired
	private AlumnoRepository repoAlum;
	@Override
	public Alumno obtenerAlumno(String idAlum) {
		// TODO Auto-generated method stub
		return repoAlum.findById(idAlum).orElse(null);
	}

	@Override
	public Alumno ingresarAlumno(Alumno objAlumno) {
		// TODO Auto-generated method stub
		return repoAlum.save(objAlumno);
	}

	@Override
	public Alumno actualizarAlumno(Alumno objAlumno) {
		// TODO Auto-generated method stub
		return repoAlum.save(objAlumno);
	}

	@Override
	public void eliminarAlumno(Alumno objAlumno) {
		// TODO Auto-generated method stub
		 repoAlum.delete(objAlumno);
	}

	@Override
	public List<Alumno> listarAlumnoNombre(String nombre) {
		// TODO Auto-generated method stub
		return repoAlum.findByNombre(nombre);
	}

	@Override
	public List<Alumno> listarAlumno() {
		// TODO Auto-generated method stub
		return repoAlum.findAll();
	}

}

package com.proyecto.apps.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.apps.Model.Alumno;

public interface AlumnoRepository extends JpaRepository<Alumno, String>{
	
	List<Alumno> findByNombre(String nombre);

}

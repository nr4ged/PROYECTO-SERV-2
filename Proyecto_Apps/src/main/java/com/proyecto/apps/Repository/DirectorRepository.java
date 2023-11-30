package com.proyecto.apps.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.apps.Model.Director;


public interface DirectorRepository extends JpaRepository<Director, String>{
	
	List<Director> findByNombre(String nombre);

}

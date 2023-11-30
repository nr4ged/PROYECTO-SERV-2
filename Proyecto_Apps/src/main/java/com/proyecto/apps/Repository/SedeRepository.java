package com.proyecto.apps.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.apps.Model.Sede;

public interface SedeRepository extends JpaRepository<Sede, String>{
	
	List<Sede> findByDistrito(String distrito);
	
}

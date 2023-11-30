package com.proyecto.apps.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.apps.Model.Salon;

public interface SalonRepository extends JpaRepository<Salon, String>{
	
	List<Salon> findByProfesor(String profesor);

}

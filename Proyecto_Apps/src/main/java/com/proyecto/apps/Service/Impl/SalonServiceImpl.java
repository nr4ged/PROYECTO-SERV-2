package com.proyecto.apps.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.apps.Model.Salon;
import com.proyecto.apps.Repository.SalonRepository;
import com.proyecto.apps.Service.SalonService;

@Service
public class SalonServiceImpl implements SalonService{

	@Autowired
	private SalonRepository repoSalon; 
	
	@Override
	public Salon obtenerSalon(String idSalon) {
		// TODO Auto-generated method stub
		return repoSalon.findById(idSalon).orElse(null);
	}

	@Override
	public Salon ingresarSalon(Salon objSalon) {
		// TODO Auto-generated method stub
		return repoSalon.save(objSalon);
	}

	@Override
	public Salon actualizarSalon(Salon objSalon) {
		// TODO Auto-generated method stub
		return repoSalon.save(objSalon);
	}

	@Override
	public void eliminarSalon(Salon objSalon) {
		// TODO Auto-generated method stub
		 repoSalon.delete(objSalon);
	}

	@Override
	public List<Salon> listarProfesorNombre(String profesor) {
		// TODO Auto-generated method stub
		return repoSalon.findByProfesor(profesor);
	}

	@Override
	public List<Salon> listarSalon() {
		// TODO Auto-generated method stub
		return repoSalon.findAll();
	}

}

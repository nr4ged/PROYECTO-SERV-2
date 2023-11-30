package com.proyecto.apps.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.apps.Model.Sede;
import com.proyecto.apps.Repository.SedeRepository;
import com.proyecto.apps.Service.SedeService;

@Service
public class SedeServiceImpl implements SedeService {

	@Autowired
	private SedeRepository repoSede;
	@Override
	public List<Sede> listarSede() {
		// TODO Auto-generated method stub
		return repoSede.findAll();
	}

	@Override
	public Sede obtenerSede(String id) {
		// TODO Auto-generated method stub
		return repoSede.findById(id).orElse(null);
	}

	@Override
	public Sede ingresarSede(Sede objSede) {
		// TODO Auto-generated method stub
		return repoSede.save(objSede);
	}

	@Override
	public Sede actualizarSede(Sede objSede) {
		// TODO Auto-generated method stub
		return repoSede.save(objSede);
	}

	@Override
	public void eliminarSede(Sede objSede) {
		// TODO Auto-generated method stub
		repoSede.delete(objSede);
	}

	@Override
	public List<Sede> listarSedeDistrito(String distrito){
		// TODO Auto-generated method stub
		return repoSede.findByDistrito(distrito);
	}

}

package com.proyecto.apps.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.apps.Model.Director;
import com.proyecto.apps.Repository.DirectorRepository;
import com.proyecto.apps.Service.DirectorService;


@Service
public class DirectorServiceImpl implements DirectorService{

	@Autowired
	private DirectorRepository repoDirec;
	
	@Override
	public List<Director> listarDirector() {
		// TODO Auto-generated method stub
		return repoDirec.findAll();
	}

	@Override
	public Director obtenerDirector(String idDirector) {
		// TODO Auto-generated method stub
		return repoDirec.findById(idDirector).orElse(null);
	}

	@Override
	public Director ingresarDirector(Director objDirector) {
		// TODO Auto-generated method stub
		return repoDirec.save(objDirector);
	}

	@Override
	public Director actualizarDirector(Director objDirector) {
		// TODO Auto-generated method stub
		return repoDirec.save(objDirector);
	}

	@Override
	public void eliminarDirector(Director objDirector) {
		// TODO Auto-generated method stub
		repoDirec.delete(objDirector);
	}

	@Override
	public List<Director> listarDirectorNombre(String nombre) {
		// TODO Auto-generated method stub
		return repoDirec.findByNombre(nombre);
	}

}

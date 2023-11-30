package com.proyecto.apps.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table (name = "tb_salon")
@Data
public class Salon {
	
	@Id
	@Column (name = "id_salon")
	private String idSalon;
	@Column (name = "profesor_salon")
	private String profesor;
	@Column (name = "nmro_alum_salon")
	private String nmroAlum;
	@Column (name = "curso_salon")
	private String curso;
	@Column (name = "sede_salon")
	private String sede;
	
	public String getIdSalon() {
		return idSalon;
	}
	public void setIdSalon(String idSalon) {
		this.idSalon = idSalon;
	}
	public String getProfesor() {
		return profesor;
	}
	public void setProfesor(String profesor) {
		this.profesor = profesor;
	}
	public String getNmroAlum() {
		return nmroAlum;
	}
	public void setNmroAlum(String nmroAlum) {
		this.nmroAlum = nmroAlum;
	}
	public String getCurso() {
		return curso;
	}
	public void setCurso(String curso) {
		this.curso = curso;
	}
	public String getSede() {
		return sede;
	}
	public void setSede(String sede) {
		this.sede = sede;
	}
	
	
	
	
}

package com.proyecto.apps.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Table (name = "tb_director")
@Data
public class Director {
	
	@Id
	@Column (name = "id_director")
	private String idDirector;
	@Column (name = "nombre_director")
	private String nombre;
	@Column (name = "apellido_director")
	private String apellido;
	@Column (name = "edad_director")
	private String edad;
	@Column (name = "dni_director")
	private String dni;
	public String getIdDirector() {
		return idDirector;
	}
	public void setIdDirector(String idDirector) {
		this.idDirector = idDirector;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public String getEdad() {
		return edad;
	}
	public void setEdad(String edad) {
		this.edad = edad;
	}
	public String getDni() {
		return dni;
	}
	public void setDni(String dni) {
		this.dni = dni;
	}
	
	
}

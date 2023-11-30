package com.proyecto.apps.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Entity
@Data
@Table (name = "tb_alumno")
public class Alumno {
	@Id
	@Column (name = "id_alumno")
	private String idAlum;
	@Column (name = "nombre_alumno")
	private String nombre;
	@Column (name = "apellido_alumno")
	private String apellido;
	@Column (name = "edad_alumno")
	private String edad;
	@Column (name = "dni_alumno")
	private String dni;
	@Column (name = "salon_alumno")
	private String salon;
	
	public String getIdAlum() {
		return idAlum;
	}
	public void setIdAlum(String idAlum) {
		this.idAlum = idAlum;
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
	public String getSalon() {
		return salon;
	}
	public void setSalon(String salon) {
		this.salon = salon;
	}
	
	
}

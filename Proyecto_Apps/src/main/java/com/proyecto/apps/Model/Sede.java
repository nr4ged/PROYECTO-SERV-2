package com.proyecto.apps.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Table (name = "tb_sede")
@Data
public class Sede {
	
	@Id
	@Column (name = "id_sede")
	private String id;
	@Column (name = "distrito_sede")
	private	String distrito;
	@Column (name = "provincia_sede")
	private String provincia;
	@Column (name = "cant_max_sede")
	private String cantMax;
	@Column (name = "cant_salones_sede")
	private String cantSalones;
	@Column (name = "director_sede")
	private String director;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDistrito() {
		return distrito;
	}
	public void setDistrito(String distrito) {
		this.distrito = distrito;
	}
	public String getProvincia() {
		return provincia;
	}
	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}
	public String getCantMax() {
		return cantMax;
	}
	public void setCantMax(String cantMax) {
		this.cantMax = cantMax;
	}
	public String getCantSalones() {
		return cantSalones;
	}
	public void setCantSalones(String cantSalones) {
		this.cantSalones = cantSalones;
	}
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	
	
	
	
}

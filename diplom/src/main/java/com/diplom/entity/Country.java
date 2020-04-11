package com.diplom.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "t_country")
public class Country implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "country_id")
	private int id;

	@Column(name = "name")
	private String name;

	@OneToMany(mappedBy = "country", fetch = FetchType.LAZY)
	private Set<FilmCountry> films;

	public Country() {

	}

	public Country(int id, String name, Set<FilmCountry> films) {
		this.id = id;
		this.name = name;
		this.films = films;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<FilmCountry> getFilms() {
		return films;
	}

	public void setFilms(Set<FilmCountry> films) {
		this.films = films;
	}

	@Override
	public String toString() {
		return "Country [id=" + id + ", name=" + name + ", films=" + films + "]";
	}

}

package com.diplom.entity.dto;

import java.util.Set;

public class GenreDtoFilms {

	private int id;

	private String name;

	private Set<FilmCountryDto2> films;

	public GenreDtoFilms() {

	}

	public GenreDtoFilms(int id, String name, Set<FilmCountryDto2> films) {
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

	public Set<FilmCountryDto2> getFilms() {
		return films;
	}

	public void setFilms(Set<FilmCountryDto2> films) {
		this.films = films;
	}

	@Override
	public String toString() {
		return "GenreDtoFilms [id=" + id + ", name=" + name + ", films=" + films + "]";
	}

}

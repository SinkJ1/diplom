package com.diplom.entity.dto;

import java.util.Set;

public class GenreDtoFilms {

	private int id;
	
	private String genreName;
	
	private Set<FilmCountryDto2> films;
	
	public GenreDtoFilms() {
		
	}
	
	public GenreDtoFilms(int id, String genreName, Set<FilmCountryDto2> films) {
		this.id = id;
		this.genreName = genreName;
		this.films = films;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getGenreName() {
		return genreName;
	}

	public void setGenreName(String genreName) {
		this.genreName = genreName;
	}

	public Set<FilmCountryDto2> getFilms() {
		return films;
	}

	public void setFilms(Set<FilmCountryDto2> films) {
		this.films = films;
	}

	@Override
	public String toString() {
		return "GenreDtoFilms [id=" + id + ", genreName=" + genreName + ", films=" + films + "]";
	}

	

	
}

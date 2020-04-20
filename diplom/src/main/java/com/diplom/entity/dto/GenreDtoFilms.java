package com.diplom.entity.dto;

import java.util.Set;

public class GenreDtoFilms {

private String name;
	
	private Set<FilmCountryDto2> films;

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
		return "CountryDtoFilms [name=" + name + ", films=" + films + "]";
	}
}

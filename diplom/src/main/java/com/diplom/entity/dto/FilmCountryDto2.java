package com.diplom.entity.dto;

public class FilmCountryDto2 {

	private FilmDto film;

	public FilmDto getFilm() {
		return film;
	}

	public void setFilm(FilmDto film) {
		this.film = film;
	}

	@Override
	public String toString() {
		return "FilmCountryDto2 [film=" + film + "]";
	}

}

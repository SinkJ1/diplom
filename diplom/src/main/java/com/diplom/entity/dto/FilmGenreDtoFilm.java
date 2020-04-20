package com.diplom.entity.dto;

public class FilmGenreDtoFilm {

	private FilmDto film;

	public FilmGenreDtoFilm() {

	}

	public FilmGenreDtoFilm(FilmDto film) {
		this.film = film;
	}

	public FilmDto getFilm() {
		return film;
	}

	public void setFilm(FilmDto film) {
		this.film = film;
	}

	@Override
	public String toString() {
		return "FilmsGenreDtoFilm [film=" + film + "]";
	}

}

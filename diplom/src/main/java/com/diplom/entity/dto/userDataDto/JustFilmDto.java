package com.diplom.entity.dto.userDataDto;

import com.diplom.entity.dto.FilmDto;

public class JustFilmDto {

	private int id;

	private FilmDto film;

	public JustFilmDto(int id, FilmDto film) {
		this.id = id;
		this.film = film;
	}

	public JustFilmDto() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public FilmDto getFilm() {
		return film;
	}

	public void setFilm(FilmDto film) {
		this.film = film;
	}

	@Override
	public String toString() {
		return "JustFilmDto [id=" + id + ", film=" + film + "]";
	}

}

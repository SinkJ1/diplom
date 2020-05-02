package com.diplom.entity.dto.userDataDto;

import com.diplom.entity.dto.FilmDto;

public class UserDataFilm {

	private int id;

	private FilmDto film;

	public UserDataFilm() {

	}

	public UserDataFilm(int id, FilmDto film) {
		this.id = id;
		this.film = film;
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
		return "UserDataFilm [id=" + id + ", film=" + film + "]";
	}

}

package com.diplom.entity.dto.simpleUser;


public class LickedFilmDto {

	private int id;

	private FilmBlockDto film;

	public LickedFilmDto() {

	}

	public LickedFilmDto(int id, FilmBlockDto film) {
		this.id = id;
		this.film = film;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public FilmBlockDto getFilm() {
		return film;
	}

	public void setFilm(FilmBlockDto film) {
		this.film = film;
	}

	@Override
	public String toString() {
		return "UserLickedFilm [id=" + id + ", licked=" + film + "]";
	}

}

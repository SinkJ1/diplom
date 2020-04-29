package com.diplom.entity.dto;

public class SubscriberDtoFilm {
	private int id;

	private String eMail;

	FilmDto film;

	public SubscriberDtoFilm() {

	}

	public SubscriberDtoFilm(int id, String eMail, FilmDto film) {
		this.id = id;
		this.eMail = eMail;
		this.film = film;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String geteMail() {
		return eMail;
	}

	public void seteMail(String eMail) {
		this.eMail = eMail;
	}

	public FilmDto getFilm() {
		return film;
	}

	public void setFilm(FilmDto film) {
		this.film = film;
	}

	@Override
	public String toString() {
		return "SubscriberOnFilmUpdateDtoFilm [id=" + id + ", eMail=" + eMail + ", film=" + film + "]";
	}

}

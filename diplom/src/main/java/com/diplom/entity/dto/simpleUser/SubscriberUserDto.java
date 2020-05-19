package com.diplom.entity.dto.simpleUser;

public class SubscriberUserDto {

	private int id;

	private FilmBlockDto film;

	public SubscriberUserDto() {

	}

	public SubscriberUserDto(int id, FilmBlockDto film) {
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
		return "SubscriberUserDto [id=" + id + ", film=" + film + "]";
	}

}

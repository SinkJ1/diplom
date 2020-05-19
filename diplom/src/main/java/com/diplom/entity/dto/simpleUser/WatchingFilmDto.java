package com.diplom.entity.dto.simpleUser;

public class WatchingFilmDto {

	private int id;

	private FilmBlockDto film;

	private String time;

	public WatchingFilmDto() {
	}

	public WatchingFilmDto(int id, FilmBlockDto film, String time) {
		this.id = id;
		this.film = film;
		this.time = time;
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

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "WatchingFilmDto [id=" + id + ", film=" + film + "]";
	}

}

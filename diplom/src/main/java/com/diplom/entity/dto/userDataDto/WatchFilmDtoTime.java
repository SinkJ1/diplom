package com.diplom.entity.dto.userDataDto;

import com.diplom.entity.dto.FilmDto;

public class WatchFilmDtoTime {
	
	private int id;

	private FilmDto film;
	
	private String time;

	public WatchFilmDtoTime() {

	}

	public WatchFilmDtoTime(int id, FilmDto film, String time) {
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

	public FilmDto getFilm() {
		return film;
	}

	public void setFilm(FilmDto film) {
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
		return "UserDataFilmTime [id=" + id + ", film=" + film + ", time=" + time + "]";
	}

	
}

package com.diplom.entity.dto;

public class ActorDtoFilm {
	
	private FilmDto film;

	public ActorDtoFilm() {
		
	}
	
	public ActorDtoFilm(FilmDto film) {
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
		return "ActorDtoFilm [film=" + film + "]";
	}


}

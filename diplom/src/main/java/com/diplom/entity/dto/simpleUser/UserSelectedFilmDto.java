package com.diplom.entity.dto.simpleUser;

import com.diplom.entity.dto.common.FilmImgDto;

public class UserSelectedFilmDto {

	private FilmImgDto film;

	public UserSelectedFilmDto() {

	}

	public UserSelectedFilmDto(FilmImgDto film) {
		this.film = film;
	}

	public FilmImgDto getFilm() {
		return film;
	}

	public void setFilm(FilmImgDto film) {
		this.film = film;
	}

	@Override
	public String toString() {
		return "UserSubscribeDto [film=" + film + "]";
	}

}

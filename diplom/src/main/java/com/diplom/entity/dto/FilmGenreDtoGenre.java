package com.diplom.entity.dto;


public class FilmGenreDtoGenre {
	private GenreDto genre;

	public FilmGenreDtoGenre() {

	}

	public FilmGenreDtoGenre(GenreDto genre) {
		this.genre = genre;
	}

	public GenreDto getGenre() {
		return genre;
	}

	public void setGenre(GenreDto genre) {
		this.genre = genre;
	}

	@Override
	public String toString() {
		return "FilmsGenreDtoGenre [genre=" + genre + "]";
	}

}

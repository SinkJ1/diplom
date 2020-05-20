package com.diplom.entity.dto.film;

public class FilmRateDto {

	private int id;

	private double filmRaiting;

	public FilmRateDto() {

	}

	public FilmRateDto(int id, double filmRaiting) {
		this.id = id;
		this.filmRaiting = filmRaiting;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getFilmRaiting() {
		return filmRaiting;
	}

	public void setFilmRaiting(double filmRaiting) {
		this.filmRaiting = filmRaiting;
	}

	@Override
	public String toString() {
		return "FilmRateDto [id=" + id + ", filmRaiting=" + filmRaiting + "]";
	}

}

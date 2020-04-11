package com.diplom.entity.dto;

import java.util.Date;
import java.util.Set;

public class FilmProducerDto {
	private String filmName;

	private String filmInformation;

	private Date filmReleaseDate;

	private double filmRaiting;

	private String imgPath;

	private double filmProfit;

	private double filmCost;

	private Set<ActorDto> actors;

	private Set<FilmCountryDto> countries;

	public FilmProducerDto() {

	}

	public FilmProducerDto(String filmName, String filmInformation, Date filmReleaseDate, double filmRaiting,
			String imgPath, double filmProfit, double filmCost, Set<ActorDto> actors, Set<FilmCountryDto> countries) {
		this.filmName = filmName;
		this.filmInformation = filmInformation;
		this.filmReleaseDate = filmReleaseDate;
		this.filmRaiting = filmRaiting;
		this.imgPath = imgPath;
		this.filmProfit = filmProfit;
		this.filmCost = filmCost;
		this.actors = actors;
		this.countries = countries;
	}

	public Set<ActorDto> getActors() {
		return actors;
	}

	public void setActors(Set<ActorDto> actors) {
		this.actors = actors;
	}

	public String getFilmName() {
		return filmName;
	}

	public void setFilmName(String filmName) {
		this.filmName = filmName;
	}

	public String getFilmInformation() {
		return filmInformation;
	}

	public void setFilmInformation(String filmInformation) {
		this.filmInformation = filmInformation;
	}

	public Date getFilmReleaseDate() {
		return filmReleaseDate;
	}

	public void setFilmReleaseDate(Date filmReleaseDate) {
		this.filmReleaseDate = filmReleaseDate;
	}

	public double getFilmRaiting() {
		return filmRaiting;
	}

	public void setFilmRaiting(double filmRaiting) {
		this.filmRaiting = filmRaiting;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public double getFilmProfit() {
		return filmProfit;
	}

	public void setFilmProfit(double filmProfit) {
		this.filmProfit = filmProfit;
	}

	public double getFilmCost() {
		return filmCost;
	}

	public void setFilmCost(double filmCost) {
		this.filmCost = filmCost;
	}

	public Set<FilmCountryDto> getCountries() {
		return countries;
	}

	public void setCountries(Set<FilmCountryDto> countries) {
		this.countries = countries;
	}

	@Override
	public String toString() {
		return "FilmDto [filmName=" + filmName + ", filmInformation=" + filmInformation
				+ ", filmReleaseDate=" + filmReleaseDate + ", filmRaiting=" + filmRaiting + ", imgPath=" + imgPath
				+ ", filmProfit=" + filmProfit + ", filmCost=" + filmCost + ", actors=" + actors + ", countries="
				+ countries + "]";
	}
}

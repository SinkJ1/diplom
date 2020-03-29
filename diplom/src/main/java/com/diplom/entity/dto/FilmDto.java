package com.diplom.entity.dto;

import java.util.Set;

public class FilmDto {

	private String filmName;
	
	private UserDto userId;

	private String filmInformation;
	
	private String filmReleaseDate;
	
	private double filmRaiting;
	
	private String imgPath;
	
	private String filmCountry;
	
	private double filmProfit;
	
	private double filmCost;
	
	private Set<ActorDto> actors;

	public FilmDto() {
		
	}
	
	public FilmDto(String filmName, UserDto userId, String filmInformation, String filmReleaseDate, double filmRaiting,
			String imgPath, String filmCountry, double filmProfit, double filmCost) {
		this.filmName = filmName;
		this.userId = userId;
		this.filmInformation = filmInformation;
		this.filmReleaseDate = filmReleaseDate;
		this.filmRaiting = filmRaiting;
		this.imgPath = imgPath;
		this.filmCountry = filmCountry;
		this.filmProfit = filmProfit;
		this.filmCost = filmCost;
	}

	public FilmDto(String filmName, UserDto userId, String filmInformation, String filmReleaseDate, double filmRaiting,
			String imgPath, String filmCountry, double filmProfit, double filmCost, Set<ActorDto> actors) {
		this.filmName = filmName;
		this.userId = userId;
		this.filmInformation = filmInformation;
		this.filmReleaseDate = filmReleaseDate;
		this.filmRaiting = filmRaiting;
		this.imgPath = imgPath;
		this.filmCountry = filmCountry;
		this.filmProfit = filmProfit;
		this.filmCost = filmCost;
		this.actors = actors;
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

	public UserDto getUserId() {
		return userId;
	}

	public void setUserId(UserDto userId) {
		this.userId = userId;
	}

	public String getFilmInformation() {
		return filmInformation;
	}

	public void setFilmInformation(String filmInformation) {
		this.filmInformation = filmInformation;
	}

	public String getFilmReleaseDate() {
		return filmReleaseDate;
	}

	public void setFilmReleaseDate(String filmReleaseDate) {
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

	public String getFilmCountry() {
		return filmCountry;
	}

	public void setFilmCountry(String filmCountry) {
		this.filmCountry = filmCountry;
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

	@Override
	public String toString() {
		return "FilmDto [filmName=" + filmName + ", userId=" + userId + ", filmInformation=" + filmInformation
				+ ", filmReleaseDate=" + filmReleaseDate + ", filmRaiting=" + filmRaiting + ", imgPath=" + imgPath
				+ ", filmCountry=" + filmCountry + ", filmProfit=" + filmProfit + ", filmCost=" + filmCost + ", actors="
				+ actors + "]";
	}
	
}

package com.diplom.entity.dto;

import java.util.Date;
import java.util.Set;

import com.diplom.entity.dto.userDataDto.UserDataUser;

public class FilmDto {

	private int id;

	private String filmName;

	private UserDto userId;

	private String filmInformation;

	private Date filmReleaseDate;

	private double filmRaiting;

	private String imgPath;

	private double filmProfit;

	private double filmCost;

	private boolean blockToWatch;

	private boolean premiumStatus;

	private String filmPlayer;

	private Set<ActorDto> actors;

	private Set<FilmCountryDto> countries;

	private Set<FilmGenreDtoGenre> genres;

	private Set<SubscriberDto> subs;

	public FilmDto() {

	}

	public FilmDto(int id, String filmName, UserDto userId, String filmInformation, Date filmReleaseDate,
			double filmRaiting, String imgPath, double filmProfit, double filmCost, boolean blockToWatch,
			boolean premiumStatus, String filmPlayer, Set<ActorDto> actors, Set<FilmCountryDto> countries,
			Set<FilmGenreDtoGenre> genres, Set<SubscriberDto> subs) {
		this.id = id;
		this.filmName = filmName;
		this.userId = userId;
		this.filmInformation = filmInformation;
		this.filmReleaseDate = filmReleaseDate;
		this.filmRaiting = filmRaiting;
		this.imgPath = imgPath;
		this.filmProfit = filmProfit;
		this.filmCost = filmCost;
		this.blockToWatch = blockToWatch;
		this.premiumStatus = premiumStatus;
		this.filmPlayer = filmPlayer;
		this.actors = actors;
		this.countries = countries;
		this.genres = genres;
		this.subs = subs;
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

	public Set<FilmGenreDtoGenre> getGenres() {
		return genres;
	}

	public void setGenres(Set<FilmGenreDtoGenre> genres) {
		this.genres = genres;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean isBlockToWatch() {
		return blockToWatch;
	}

	public void setBlockToWatch(boolean blockToWatch) {
		this.blockToWatch = blockToWatch;
	}

	public boolean isPremiumStatus() {
		return premiumStatus;
	}

	public void setPremiumStatus(boolean premiumStatus) {
		this.premiumStatus = premiumStatus;
	}

	public String getFilmPlayer() {
		return filmPlayer;
	}

	public void setFilmPlayer(String filmPlayer) {
		this.filmPlayer = filmPlayer;
	}

	public Set<SubscriberDto> getSubs() {
		return subs;
	}

	public void setSubs(Set<SubscriberDto> subs) {
		this.subs = subs;
	}

	@Override
	public String toString() {
		return "FilmDto [id=" + id + ", filmName=" + filmName + ", userId=" + userId + ", filmInformation="
				+ filmInformation + ", filmReleaseDate=" + filmReleaseDate + ", filmRaiting=" + filmRaiting
				+ ", imgPath=" + imgPath + ", filmProfit=" + filmProfit + ", filmCost=" + filmCost + ", blockToWatch="
				+ blockToWatch + ", premiumStatus=" + premiumStatus + ", filmPlayer=" + filmPlayer + ", actors="
				+ actors + ", countries=" + countries + ", genres=" + genres + ", subs=" + subs + "]";
	}

}

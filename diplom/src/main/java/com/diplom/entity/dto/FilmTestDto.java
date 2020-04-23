package com.diplom.entity.dto;

public class FilmTestDto {

	private String filmName;

	private String userId;

	private String filmInformation;

	private String filmReleaseDate;

	private int filmRaiting;

	private String imgPath;

	private int filmProfit;

	private int filmCost;

	public FilmTestDto() {
	}

	public FilmTestDto(String filmName, String userId, String filmInformation, String filmReleaseDate, int filmRaiting,
			String imgPath, int filmProfit, int filmCost) {
		this.filmName = filmName;
		this.userId = userId;
		this.filmInformation = filmInformation;
		this.filmReleaseDate = filmReleaseDate;
		this.filmRaiting = filmRaiting;
		this.imgPath = imgPath;
		this.filmProfit = filmProfit;
		this.filmCost = filmCost;
	}

	public String getFilmName() {
		return filmName;
	}

	public void setFilmName(String filmName) {
		this.filmName = filmName;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
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

	public int getFilmRaiting() {
		return filmRaiting;
	}

	public void setFilmRaiting(int filmRaiting) {
		this.filmRaiting = filmRaiting;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public int getFilmProfit() {
		return filmProfit;
	}

	public void setFilmProfit(int filmProfit) {
		this.filmProfit = filmProfit;
	}

	public int getFilmCost() {
		return filmCost;
	}

	public void setFilmCost(int filmCost) {
		this.filmCost = filmCost;
	}

	@Override
	public String toString() {
		return "FilmTestDto [filmName=" + filmName + ", userId=" + userId + ", filmInformation=" + filmInformation
				+ ", filmReleaseDate=" + filmReleaseDate + ", filmRaiting=" + filmRaiting + ", imgPath=" + imgPath
				+ ", filmProfit=" + filmProfit + ", filmCost=" + filmCost + "]";
	}

}

package com.diplom.entity.dto.simpleUser;

public class FilmBlockDto {

	private int id;

	private String filmName;

	private String filmInformation;

	private String imgPath;

	public FilmBlockDto() {

	}

	public FilmBlockDto(int id, String filmName, String filmInformation, String imgPath) {
		this.id = id;
		this.filmName = filmName;
		this.filmInformation = filmInformation;
		this.imgPath = imgPath;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	@Override
	public String toString() {
		return "FilmBlockDto [id=" + id + ", filmName=" + filmName + ", filmInformation=" + filmInformation + ", imgPath="
				+ imgPath + "]";
	}

}

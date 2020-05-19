package com.diplom.entity.dto.common;

public class FilmImgDto {

	private int id;

	private String filmName;

	private String imgPath;

	public FilmImgDto() {
	}

	public FilmImgDto(int id, String filmName, String imgPath) {
		this.id = id;
		this.filmName = filmName;
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

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	@Override
	public String toString() {
		return "FilmImgDto [id=" + id + ", filmName=" + filmName + ", imgPath=" + imgPath + "]";
	}

}

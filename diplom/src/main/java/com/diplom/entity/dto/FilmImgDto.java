package com.diplom.entity.dto;

public class FilmImgDto {

	private String filmName;

	private String imgPath;

	public FilmImgDto() {
	}

	public FilmImgDto(String filmName, String imgPath) {
		this.filmName = filmName;
		this.imgPath = imgPath;
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
		return "FilmImgDto [filmName=" + filmName + ", imgPath=" + imgPath + "]";
	}

}

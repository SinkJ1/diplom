package com.diplom.entity.dto.commet;

import com.diplom.entity.dto.FilmDto;

public class CommentDto {

	private int id;

	private FilmDto film;

	private UserCommentDto user;

	private String commentValue;

	private String date;

	private int like;

	private int disLike;

	public CommentDto() {

	}

	public CommentDto(int id, FilmDto film, UserCommentDto user, String commentValue, String date, int like,
			int disLike) {
		this.id = id;
		this.film = film;
		this.user = user;
		this.commentValue = commentValue;
		this.date = date;
		this.like = like;
		this.disLike = disLike;
	}

	public int getLike() {
		return like;
	}

	public void setLike(int like) {
		this.like = like;
	}

	public int getDisLike() {
		return disLike;
	}

	public void setDisLike(int disLike) {
		this.disLike = disLike;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public FilmDto getFilm() {
		return film;
	}

	public void setFilm(FilmDto film) {
		this.film = film;
	}

	public UserCommentDto getUser() {
		return user;
	}

	public void setUser(UserCommentDto user) {
		this.user = user;
	}

	public String getCommentValue() {
		return commentValue;
	}

	public void setCommentValue(String commentValue) {
		this.commentValue = commentValue;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "CommentDto [id=" + id + ", film=" + film + ", user=" + user + ", commentValue=" + commentValue
				+ ", date=" + date + ", like=" + like + ", disLike=" + disLike + "]";
	}

}

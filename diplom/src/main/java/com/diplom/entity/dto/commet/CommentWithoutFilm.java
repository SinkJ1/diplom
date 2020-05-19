package com.diplom.entity.dto.commet;

import java.util.Date;

public class CommentWithoutFilm {

	private int id;

	private UserCommentDto user;

	private String commentValue;

	private Date date;

	private int like;

	private int disLike;

	public CommentWithoutFilm() {

	}

	public CommentWithoutFilm(int id, UserCommentDto user, String commentValue, Date date, int like, int disLike) {
		this.id = id;
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "CommentWithoutFilm [id=" + id + ", user=" + user + ", commentValue=" + commentValue + ", date=" + date
				+ ", like=" + like + ", disLike=" + disLike + "]";
	}

}

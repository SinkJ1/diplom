package com.diplom.entity.dto.film;

import java.util.Date;

public class CommentDto {

	private int id;

	private UserDto user;

	private String commentValue;

	private Date date;

	private int like;

	private int disLike;

	public CommentDto() {

	}

	public CommentDto(int id, UserDto user, String commentValue, Date date, int like, int disLike) {
		this.id = id;
		this.user = user;
		this.commentValue = commentValue;
		this.date = date;
		this.like = like;
		this.disLike = disLike;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public UserDto getUser() {
		return user;
	}

	public void setUser(UserDto user) {
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

	@Override
	public String toString() {
		return "CommentDto [id=" + id + ", user=" + user + ", commentValue=" + commentValue
				+ ", date=" + date + ", like=" + like + ", disLike=" + disLike + "]";
	}

}

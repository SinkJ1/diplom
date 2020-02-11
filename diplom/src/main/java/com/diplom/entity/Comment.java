package com.diplom.entity;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "t_comment")
public class Comment implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -2001325910641603462L;

	@Id
	@Column(name = "id")
	private int commentId;
	
	@OneToOne
	@JoinColumn(name = "film_id")
	private Film film;
	
	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(name = "value")
	private String commentValue;
	
	@Column(name = "date")
	private String date;

	public Comment() {
		
	}
	
	public Comment(int commentId, Film film, User user, String commentValue, String date) {
		this.commentId = commentId;
		this.film = film;
		this.user = user;
		this.commentValue = commentValue;
		this.date = date;
	}

	public int getCommentId() {
		return commentId;
	}

	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}

	public Film getFilm() {
		return film;
	}

	public void setFilm(Film film) {
		this.film = film;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
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
		return "Comment [commentId=" + commentId + ", film=" + film + ", user=" + user + ", commentValue="
				+ commentValue + ", date=" + date + "]";
	}
	
	
	
}

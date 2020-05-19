package com.diplom.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "t_comment")
public class Comment implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2001325910641603462L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@OneToOne
	@JoinColumn(name = "film")
	private Film film;

	@OneToOne
	@JoinColumn(name = "client")
	private User user;

	@Column(name = "text")
	private String commentValue;

	@Column(name = "date")
	private Date date;

	@Column(name = "licke")
	private int like;

	@Column(name = "disLike")
	private int disLike;

	public Comment() {

	}

	public Comment(int id, Film film, User user, String commentValue, Date date, int like, int disLike) {
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Comment [id=" + id + ", film=" + film + ", user=" + user + ", commentValue=" + commentValue + ", date="
				+ date + ", like=" + like + ", disLike=" + disLike + "]";
	}

}

package com.diplom.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "t_licked_film")
public class LikedFilm implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 7147701577153810359L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@JoinColumn(name = "liker")
	@OneToOne(fetch = FetchType.LAZY)
	private User user;
	
	
	@JoinColumn(name = "film")
	@OneToOne(fetch = FetchType.LAZY)
	private Film film;
	
	public LikedFilm() {
		
	}

	public LikedFilm(int id,User user, Film film) {
		this.id = id;
		this.user = user;
		this.film = film;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Film getFilm() {
		return film;
	}

	public void setFilm(Film film) {
		this.film = film;
	}

	@Override
	public String toString() {
		return "LikedFilm [id=" + id + ", user=" + user + ", film=" + film + "]";
	}

	
}

package com.diplom.entity;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "t_actor")
public class Actor implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 9151783396754007932L;

	@Id
	private int id;
	
	@JoinColumn(name = "actor_id")
	@OneToOne(fetch = FetchType.EAGER)
	private User user;
	
	
	@JoinColumn(name = "film_id")
	@OneToOne(fetch = FetchType.EAGER)
	private Film film;
	
	public Actor() {
		
	}

	public Actor(int id,User user, Film film) {
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
		return "Actor [userId=" + user + ", filmId=" + film + "]";
	}
	
	
	
}

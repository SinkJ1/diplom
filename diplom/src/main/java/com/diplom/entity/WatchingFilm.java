package com.diplom.entity;

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
@Table(name = "t_watchingfilm")
public class WatchingFilm {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@JoinColumn(name = "user")
	@OneToOne(fetch = FetchType.LAZY)
	private User user;

	@JoinColumn(name = "film")
	@OneToOne(fetch = FetchType.LAZY)
	private Film film;

	@Column(name = "time")
	private String time;

	public WatchingFilm() {

	}

	public WatchingFilm(int id, User user, Film film, String time) {
		this.id = id;
		this.user = user;
		this.film = film;
		this.time = time;
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

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "WatchingFilm [id=" + id + ", user=" + user + ", film=" + film + ", time=" + time + "]";
	}

}

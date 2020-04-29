package com.diplom.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "t_subscribersonfilmupdate")
public class Subscriber {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "email")
	private String eMail;

	@OneToOne
	@JoinColumn(name = "film")
	private Film film;

	public Subscriber() {

	}

	public Subscriber(int id, String eMail, Film film) {
		this.id = id;
		this.eMail = eMail;
		this.film = film;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String geteMail() {
		return eMail;
	}

	public void seteMail(String eMail) {
		this.eMail = eMail;
	}

	public Film getFilm() {
		return film;
	}

	public void setFilm(Film film) {
		this.film = film;
	}

	@Override
	public String toString() {
		return "SubscriberOnFilmUpdate [id=" + id + ", eMail=" + eMail + ", film=" + film + "]";
	}

}

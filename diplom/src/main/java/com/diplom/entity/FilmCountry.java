package com.diplom.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "t_film_country")
public class FilmCountry {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@OneToOne
	@JoinColumn(name = "film")
	private Film film;

	@OneToOne
	@JoinColumn(name = "country")
	private Country country;

	public FilmCountry() {

	}

	public FilmCountry(Integer id, Film film, Country country) {
		this.id = id;
		this.film = film;
		this.country = country;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Film getFilm() {
		return film;
	}

	public void setFilm(Film film) {
		this.film = film;
	}

	public Country getCountry() {
		return country;
	}

	public void setCountry(Country country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return "FilmCountry [id=" + id + ", film=" + film + ", country=" + country + "]";
	}

}

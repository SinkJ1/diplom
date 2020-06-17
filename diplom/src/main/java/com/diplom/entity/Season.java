package com.diplom.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "t_season")
public class Season {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "season_id")
	private int id;

	@Column(name = "season_number")
	private int number;

	@OneToMany(mappedBy = "season", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<Series> series;

	@OneToOne
	@JoinColumn(name = "film")
	private Film film;

	public Season() {

	}

	public Season(int id, int number, Set<Series> series, Film film) {
		this.id = id;
		this.number = number;
		this.series = series;
		this.film = film;
	}

	public Film getFilm() {
		return film;
	}

	public void setFilm(Film film) {
		this.film = film;
	}

	public Set<Series> getSeries() {
		return series;
	}

	public void setSeries(Set<Series> series) {
		this.series = series;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	@Override
	public String toString() {
		return "Season [id=" + id + ", number=" + number + ", series=" + series + ", film=" + film + "]";
	}

}

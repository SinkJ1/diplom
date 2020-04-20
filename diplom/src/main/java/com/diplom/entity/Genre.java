package com.diplom.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "t_genre")
public class Genre implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "genre_id")
	private Integer id;

	@Column(name = "genre_name")
	private String genreName;

	@OneToMany(mappedBy = "genre", fetch = FetchType.LAZY)
	private Set<FilmsGenre> films;

	public Genre() {

	}

	public Genre(Integer id, String genreName, Set<FilmsGenre> films) {
		this.id = id;
		this.genreName = genreName;
		this.films = films;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getGenreName() {
		return genreName;
	}

	public void setGenreName(String genreName) {
		this.genreName = genreName;
	}

	public Set<FilmsGenre> getFilms() {
		return films;
	}

	public void setFilms(Set<FilmsGenre> films) {
		this.films = films;
	}

	@Override
	public String toString() {
		return "Genre [id=" + id + ", genreName=" + genreName + ", films=" + films + "]";
	}

}

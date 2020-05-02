package com.diplom.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "t_user")
public class User implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer id;

	@Column(name = "user_name")
	private String name;

	@Column(name = "user_birdth_date")
	private String birdthDate;

	@Column(name = "user_login")
	private String login;

	@Column(name = "user_password")
	private String password;

	@Enumerated(EnumType.STRING)
	@Column(name = "user_role")
	private UserRole role;

	@JsonIgnore
	@OneToMany(mappedBy = "userId", fetch = FetchType.LAZY)
	private Set<Film> films;

	@JsonIgnore
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	private Set<Actor> actors;

	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	private Set<LikedFilm> licked;

	@JsonIgnore
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	private Set<WatchingFilm> watch;

	public User() {
	}

	public User(Integer id, String name, String birdthDate, String login, String password, UserRole role,
			Set<Film> films, Set<Actor> actors, Set<LikedFilm> licked, Set<WatchingFilm> watch) {
		this.id = id;
		this.name = name;
		this.birdthDate = birdthDate;
		this.login = login;
		this.password = password;
		this.role = role;
		this.films = films;
		this.actors = actors;
		this.licked = licked;
		this.watch = watch;
	}

	public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
	}

	public Set<Film> getFilms() {
		return films;
	}

	public void setFilms(Set<Film> films) {
		this.films = films;
	}

	public Set<Actor> getActors() {
		return actors;
	}

	public void setActors(Set<Actor> actors) {
		this.actors = actors;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBirdthDate() {
		return birdthDate;
	}

	public void setBirdthDate(String birdthDate) {
		this.birdthDate = birdthDate;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<LikedFilm> getLicked() {
		return licked;
	}

	public void setLicked(Set<LikedFilm> licked) {
		this.licked = licked;
	}

	public Set<WatchingFilm> getWatch() {
		return watch;
	}

	public void setWatch(Set<WatchingFilm> watch) {
		this.watch = watch;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", birdthDate=" + birdthDate + ", login=" + login + ", password="
				+ password + ", role=" + role + ", films=" + films + ", actors=" + actors + ", licked=" + licked
				+ ", watch=" + watch + "]";
	}

}

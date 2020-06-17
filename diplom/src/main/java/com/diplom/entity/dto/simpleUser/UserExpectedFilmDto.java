package com.diplom.entity.dto.simpleUser;

import java.util.Set;

public class UserExpectedFilmDto {

	private int id;

	private String login;

	private Set<SubscriberUserDto> expectedFilms;

	public UserExpectedFilmDto() {

	}

	public UserExpectedFilmDto(int id, String login, Set<SubscriberUserDto> expectedFilms) {
		this.id = id;
		this.login = login;
		this.expectedFilms = expectedFilms;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Set<SubscriberUserDto> getExpectedFilms() {
		return expectedFilms;
	}

	public void setExpectedFilms(Set<SubscriberUserDto> expectedFilms) {
		this.expectedFilms = expectedFilms;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	@Override
	public String toString() {
		return "UserExpectedFilmDto [id=" + id + ", login=" + login + ", expectedFilms=" + expectedFilms + "]";
	}

}

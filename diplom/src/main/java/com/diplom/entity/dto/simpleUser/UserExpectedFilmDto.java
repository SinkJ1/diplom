package com.diplom.entity.dto.simpleUser;

import java.util.Set;

public class UserExpectedFilmDto {

	private int id;

	private Set<SubscriberUserDto> expectedFilms;

	public UserExpectedFilmDto() {

	}

	public UserExpectedFilmDto(int id, Set<SubscriberUserDto> expectedFilms) {
		this.id = id;
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

	@Override
	public String toString() {
		return "UserExpectedFilmDto [id=" + id + ", expectedFilms=" + expectedFilms + "]";
	}

}

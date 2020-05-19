package com.diplom.entity.dto.simpleUser;

import java.util.Set;

public class UserLickedFilm {

	private int id;

	private Set<LickedFilmDto> licked;

	public UserLickedFilm() {
	}

	public UserLickedFilm(int id, Set<LickedFilmDto> licked) {
		this.id = id;
		this.licked = licked;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Set<LickedFilmDto> getLicked() {
		return licked;
	}

	public void setLicked(Set<LickedFilmDto> licked) {
		this.licked = licked;
	}

	@Override
	public String toString() {
		return "UserLickedFilm [id=" + id + ", licked=" + licked + "]";
	}

}

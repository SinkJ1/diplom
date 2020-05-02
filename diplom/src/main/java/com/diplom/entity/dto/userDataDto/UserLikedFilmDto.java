package com.diplom.entity.dto.userDataDto;

import java.util.List;

public class UserLikedFilmDto {

	private int id;

	private List<JustFilmDto> licked;

	public UserLikedFilmDto() {

	}

	public UserLikedFilmDto(int id, List<JustFilmDto> licked) {
		this.id = id;
		this.licked = licked;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<JustFilmDto> getLicked() {
		return licked;
	}

	public void setLicked(List<JustFilmDto> licked) {
		this.licked = licked;
	}

	@Override
	public String toString() {
		return "UserLikedFilmDto [id=" + id + ", liked=" + licked + "]";
	}

}

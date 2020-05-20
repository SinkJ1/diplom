package com.diplom.entity.dto.film;

public class UserDto {

	private int id;

	public UserDto() {

	}

	public UserDto(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "UserDto [id=" + id + "]";
	}

}

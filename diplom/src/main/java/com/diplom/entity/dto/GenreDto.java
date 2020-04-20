package com.diplom.entity.dto;

public class GenreDto {

	private String name;

	public GenreDto() {

	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "GenreDto [name=" + name + "]";
	}

}

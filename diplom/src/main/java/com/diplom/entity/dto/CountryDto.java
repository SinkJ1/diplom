package com.diplom.entity.dto;

public class CountryDto {

	private int id;

	private String name;

	public CountryDto() {

	}

	public CountryDto(String name, int id) {
		this.name = name;
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "CountryDto [id=" + id + ", name=" + name + "]";
	}

}

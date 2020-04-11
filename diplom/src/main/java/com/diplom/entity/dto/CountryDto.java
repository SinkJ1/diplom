package com.diplom.entity.dto;

public class CountryDto {

	private String name;

	public CountryDto() {

	}

	public CountryDto(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "CountryDto [name=" + name + "]";
	}

}

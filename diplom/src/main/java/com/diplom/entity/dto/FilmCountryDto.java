package com.diplom.entity.dto;


public class FilmCountryDto {

	private CountryDto country;

	public FilmCountryDto() {

	}

	public FilmCountryDto(CountryDto country) {
		this.country = country;
	}

	public CountryDto getCountry() {
		return country;
	}

	public void setCountry(CountryDto country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return "FilmCountryDto [country=" + country + "]";
	}

}

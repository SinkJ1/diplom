package com.diplom.entity.dto;

import java.util.Set;

public class SeasonDto {

	private int id;

	private int number;

	private Set<SeriesDto> series;

	public SeasonDto() {

	}

	public SeasonDto(int id, int number, Set<SeriesDto> series) {
		this.id = id;
		this.number = number;
		this.series = series;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public Set<SeriesDto> getSeries() {
		return series;
	}

	public void setSeries(Set<SeriesDto> series) {
		this.series = series;
	}

	@Override
	public String toString() {
		return "SeasonDto [id=" + id + ", number=" + number + ", series=" + series + "]";
	}

}

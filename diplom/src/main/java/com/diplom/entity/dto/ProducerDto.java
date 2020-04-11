package com.diplom.entity.dto;

import java.util.Set;


public class ProducerDto {
	private Set<FilmProducerDto> films;

	
	
	public ProducerDto() {
	}

	public ProducerDto(Set<FilmProducerDto> films) {
		this.films = films;
	}

	public Set<FilmProducerDto> getFilms() {
		return films;
	}

	public void setFilms(Set<FilmProducerDto> films) {
		this.films = films;
	}

	@Override
	public String toString() {
		return "ProducerDto [films=" + films + "]";
	}
	
	
}

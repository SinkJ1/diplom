package com.diplom.entity.dto;

public class GenreDto {

	private int id;

	private String genreName;

	public GenreDto() {

	}

	public GenreDto(int id, String genreName) {
		this.id = id;
		this.genreName = genreName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	
	
	public String getGenreName() {
		return genreName;
	}

	public void setGenreName(String genreName) {
		this.genreName = genreName;
	}

	@Override
	public String toString() {
		return "GenreDto [id=" + id + ", genreName=" + genreName + "]";
	}

}

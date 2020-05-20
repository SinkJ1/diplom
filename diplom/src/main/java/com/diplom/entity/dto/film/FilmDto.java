package com.diplom.entity.dto.film;

import java.util.Set;

public class FilmDto {

	private int id;

	private Set<CommentDto> comments;

	public FilmDto() {

	}

	public FilmDto(int id, Set<CommentDto> comments) {
		this.id = id;
		this.comments = comments;
	}

	public Set<CommentDto> getComments() {
		return comments;
	}

	public void setComments(Set<CommentDto> comments) {
		this.comments = comments;
	}

	public FilmDto(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}

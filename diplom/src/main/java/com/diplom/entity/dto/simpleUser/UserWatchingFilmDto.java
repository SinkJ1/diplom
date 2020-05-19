package com.diplom.entity.dto.simpleUser;

import java.util.Set;

import com.diplom.entity.WatchingFilm;

public class UserWatchingFilmDto {

	private int id;

	private Set<WatchingFilmDto> watch;

	public UserWatchingFilmDto() {

	}

	public UserWatchingFilmDto(int id, Set<WatchingFilmDto> watch) {
		this.id = id;
		this.watch = watch;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Set<WatchingFilmDto> getWatch() {
		return watch;
	}

	public void setWatch(Set<WatchingFilmDto> watch) {
		this.watch = watch;
	}

	@Override
	public String toString() {
		return "UserWatchingFilmDto [id=" + id + ", watch=" + watch + "]";
	}

}

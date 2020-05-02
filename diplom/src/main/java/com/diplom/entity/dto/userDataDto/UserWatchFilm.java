package com.diplom.entity.dto.userDataDto;

import java.util.List;

public class UserWatchFilm {

	private int id;
	
	private List<WatchFilmDtoTime> watch;

	public UserWatchFilm(int id, List<WatchFilmDtoTime> watch) {
		this.id = id;
		this.watch = watch;
	}

	public UserWatchFilm() {
		
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<WatchFilmDtoTime> getWatch() {
		return watch;
	}

	public void setWatch(List<WatchFilmDtoTime> watch) {
		this.watch = watch;
	}

	@Override
	public String toString() {
		return "UserWatchFilm [id=" + id + ", watch=" + watch + "]";
	}
	
	
	
}

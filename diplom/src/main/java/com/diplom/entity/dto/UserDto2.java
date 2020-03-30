package com.diplom.entity.dto;

import java.util.Set;

public class UserDto2 {
	
	private String name;
	
	private Set<ActorDtoFilm> actors;

	public Set<ActorDtoFilm> getActors() {
		return actors;
	}

	public void setActors(Set<ActorDtoFilm> actors) {
		this.actors = actors;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "UserDto2 [name=" + name + ", actors=" + actors + "]";
	}
	
	
}

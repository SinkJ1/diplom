package com.diplom.entity.dto;

public class ActorDto {

	private UserDto user;

	public ActorDto() {

	}

	public ActorDto(UserDto user) {
		this.user = user;
	}

	public UserDto getUser() {
		return user;
	}

	public void setUser(UserDto user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "ActorDto [user=" + user + "]";
	}

}

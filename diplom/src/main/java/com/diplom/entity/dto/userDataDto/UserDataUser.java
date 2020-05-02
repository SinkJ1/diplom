package com.diplom.entity.dto.userDataDto;

import com.diplom.entity.dto.UserDto;

public class UserDataUser {

	private int id;

	private UserDto user;

	public UserDataUser(int id, UserDto user) {
		this.id = id;
		this.user = user;
	}

	public UserDataUser() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public UserDto getUser() {
		return user;
	}

	public void setUser(UserDto user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "UserDataUser [id=" + id + ", user=" + user + "]";
	}

}

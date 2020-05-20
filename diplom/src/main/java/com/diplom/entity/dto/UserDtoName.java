package com.diplom.entity.dto;

import java.util.Set;

import com.diplom.entity.dto.userDataDto.UserDataFilm;

public class UserDtoName {

	private int id;

	private String name;

	private String birdthDate;

	private String login;

	private String role;

	public UserDtoName() {
	}

	public UserDtoName(int id, String name, String birdthDate, String login, String role) {
		this.name = name;
		this.birdthDate = birdthDate;
		this.login = login;
		this.role = role;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBirdthDate() {
		return birdthDate;
	}

	public void setBirdthDate(String birdthDate) {
		this.birdthDate = birdthDate;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}


	@Override
	public String toString() {
		return "UserDtoName [id=" + id + ", name=" + name + ", birdthDate=" + birdthDate + ", login=" + login
				+ ", role=" + role + "]";
	}

}
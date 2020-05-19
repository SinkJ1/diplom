package com.diplom.entity.dto.simpleUser;

import com.diplom.entity.UserRole;

public class AutorizeUserDto {

	private int id;

	private String name;

	private String login;

	private UserRole role;

	public AutorizeUserDto() {

	}

	public AutorizeUserDto(int id, String name, String login, UserRole role) {
		this.id = id;
		this.name = name;
		this.login = login;
		this.role = role;
	}

	public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "AutorizeUserDto [id=" + id + ", name=" + name + ", login=" + login
				+ ", role=" + role + "]";
	}

}

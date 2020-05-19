package com.diplom.entity.dto.simpleUser;

public class RegistrationUserDto {

	private String name;

	private String birdthDate;

	private String login;

	private String password;

	public RegistrationUserDto() {

	}

	public RegistrationUserDto(String name, String birdthDate, String login, String password) {
		this.name = name;
		this.birdthDate = birdthDate;
		this.login = login;
		this.password = password;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "RegistrationUserDto [name=" + name + ", birdthDate=" + birdthDate + ", login=" + login + ", password="
				+ password + "]";
	}

}

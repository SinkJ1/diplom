package com.diplom.entity.dto.userDataDto;

import java.util.Date;

public class UpdatedUserDto {

	private Integer id;

	private String name;

	private String birdthDate;

	private String login;

	private String password;

	private Date subscribeDate;

	public UpdatedUserDto() {
	}

	public UpdatedUserDto(Integer id, String name, String birdthDate, String login, String password,
			Date subscribeDate) {
		this.id = id;
		this.name = name;
		this.birdthDate = birdthDate;
		this.login = login;
		this.password = password;
		this.subscribeDate = subscribeDate;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getSubscribeDate() {
		return subscribeDate;
	}

	public void setSubscribeDate(Date subscribeDate) {
		this.subscribeDate = subscribeDate;
	}

	@Override
	public String toString() {
		return "UpdatedUserDto [id=" + id + ", name=" + name + ", birdthDate=" + birdthDate + ", login=" + login
				+ ", password=" + password + ", subscribeDate=" + subscribeDate + "]";
	}

}

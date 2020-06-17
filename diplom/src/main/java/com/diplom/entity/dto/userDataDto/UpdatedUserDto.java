package com.diplom.entity.dto.userDataDto;

public class UpdatedUserDto {

	private Integer id;

	private String name;

	private String birdthDate;

	private String login;

	private String password;

	public UpdatedUserDto() {
	}

	public UpdatedUserDto(Integer id, String name, String birdthDate, String login, String password) {
		this.id = id;
		this.name = name;
		this.birdthDate = birdthDate;
		this.login = login;
		this.password = password;
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

	@Override
	public String toString() {
		return "UpdatedUserDto [id=" + id + ", name=" + name + ", birdthDate=" + birdthDate + ", login=" + login
				+ ", password=" + password + "]";
	}

}

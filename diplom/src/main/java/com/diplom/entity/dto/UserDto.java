package com.diplom.entity.dto;

import java.util.Date;

public class UserDto {

	private int id;

	private String name;

	private String birdthDate;

	private String login;

	private String role;

	private boolean subscribeStatus;

	private boolean blockedStatus;

	private Date subscribeDate;

	private String userImage;

	public UserDto() {

	}

	public UserDto(int id, String name, String birdthDate, String login, String role, boolean subscribeStatus,
			boolean blockedStatus, Date subscribeDate, String userImage) {
		this.id = id;
		this.name = name;
		this.birdthDate = birdthDate;
		this.login = login;
		this.role = role;
		this.subscribeStatus = subscribeStatus;
		this.blockedStatus = blockedStatus;
		this.subscribeDate = subscribeDate;
		this.userImage = userImage;
	}

	public boolean isSubscribeStatus() {
		return subscribeStatus;
	}

	public void setSubscribeStatus(boolean subscribeStatus) {
		this.subscribeStatus = subscribeStatus;
	}

	public boolean isBlockedStatus() {
		return blockedStatus;
	}

	public void setBlockedStatus(boolean blockedStatus) {
		this.blockedStatus = blockedStatus;
	}

	public Date getSubscribeDate() {
		return subscribeDate;
	}

	public void setSubscribeDate(Date subscribeDate) {
		this.subscribeDate = subscribeDate;
	}

	public String getUserImage() {
		return userImage;
	}

	public void setUserImage(String userImage) {
		this.userImage = userImage;
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
		return "UserDto [id=" + id + ", name=" + name + ", birdthDate=" + birdthDate + ", login=" + login + ", role="
				+ role + ", subscribeStatus=" + subscribeStatus + ", blockedStatus=" + blockedStatus
				+ ", subscribeDate=" + subscribeDate + ", userImage=" + userImage + "]";
	}

}

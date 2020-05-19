package com.diplom.entity.dto.simpleUser;

import java.util.Date;
import java.util.Set;

import com.diplom.entity.UserRole;

public class UserAccountDto {

	private String name;

	private String birdthDate;

	private String login;

	private UserRole role;

	private boolean subscribeStatus;

	private boolean blockedStatus;

	private Date subscribeDate;

	private String userImage;

	private Set<UserSelectedFilmDto> licked;

	private Set<UserSelectedFilmDto> expectedFilms;

	private Set<UserSelectedFilmDto> watch;

	public UserAccountDto() {
	}

	public UserAccountDto(String name, String birdthDate, String login, UserRole role, boolean subscribeStatus,
			boolean blockedStatus, Date subscribeDate, String userImage, Set<UserSelectedFilmDto> licked,
			Set<UserSelectedFilmDto> expectedFilms, Set<UserSelectedFilmDto> watch) {
		this.name = name;
		this.birdthDate = birdthDate;
		this.login = login;
		this.role = role;
		this.subscribeStatus = subscribeStatus;
		this.blockedStatus = blockedStatus;
		this.subscribeDate = subscribeDate;
		this.userImage = userImage;
		this.licked = licked;
		this.expectedFilms = expectedFilms;
		this.watch = watch;
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

	public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
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

	public Set<UserSelectedFilmDto> getLicked() {
		return licked;
	}

	public void setLicked(Set<UserSelectedFilmDto> licked) {
		this.licked = licked;
	}

	public Set<UserSelectedFilmDto> getExpectedFilms() {
		return expectedFilms;
	}

	public void setExpectedFilms(Set<UserSelectedFilmDto> expectedFilms) {
		this.expectedFilms = expectedFilms;
	}

	public Set<UserSelectedFilmDto> getWatch() {
		return watch;
	}

	public void setWatch(Set<UserSelectedFilmDto> watch) {
		this.watch = watch;
	}

	@Override
	public String toString() {
		return "UserAccountDto [name=" + name + ", birdthDate=" + birdthDate + ", login=" + login + ", role=" + role
				+ ", subscribeStatus=" + subscribeStatus + ", blockedStatus=" + blockedStatus + ", subscribeDate="
				+ subscribeDate + ", userImage=" + userImage + ", licked=" + licked + ", expectedFilms=" + expectedFilms
				+ ", watch=" + watch + "]";
	}

}

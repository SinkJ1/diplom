package com.diplom.entity.dto.userDataDto;

public class UserImgDto {

	private int id;

	private String userImage;

	public UserImgDto() {
	}

	public UserImgDto(int id, String userImage) {
		this.id = id;
		this.userImage = userImage;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserImage() {
		return userImage;
	}

	public void setUserImage(String userImage) {
		this.userImage = userImage;
	}

	@Override
	public String toString() {
		return "UserImgDto [id=" + id + ", userImage=" + userImage + "]";
	}

}

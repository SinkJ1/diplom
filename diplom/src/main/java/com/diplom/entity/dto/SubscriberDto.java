package com.diplom.entity.dto;

public class SubscriberDto {

	private int id;

	private String eMail;

	public SubscriberDto() {

	}

	public SubscriberDto(int id, String eMail) {
		this.id = id;
		this.eMail = eMail;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String geteMail() {
		return eMail;
	}

	public void seteMail(String eMail) {
		this.eMail = eMail;
	}

	@Override
	public String toString() {
		return "SubscriberOnFilmUpdateDto [id=" + id + ", eMail=" + eMail + "]";
	}

}

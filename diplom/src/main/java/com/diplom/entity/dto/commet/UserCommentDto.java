package com.diplom.entity.dto.commet;

public class UserCommentDto {

	private int id;
	
	private String name;
	
	public UserCommentDto() {
		
	}

	public UserCommentDto(int id, String name) {
		this.id = id;
		this.name = name;
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

	@Override
	public String toString() {
		return "UserCommentDto [id=" + id + ", name=" + name + "]";
	}
	
	
	
}

package com.diplom.entity.dto;

public class UserDto {

	private int id;
	
	private String name;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	@Override
	public String toString() {
		return "UserDto [id=" + id + ", name=" + name + "]";
	}

}

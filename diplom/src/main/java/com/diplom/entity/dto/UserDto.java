package com.diplom.entity.dto;

public class UserDto{

	private String name;
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}

	@Override
	public String toString() {
		return "UserDto [name=" + name + "]";
	}
	
}

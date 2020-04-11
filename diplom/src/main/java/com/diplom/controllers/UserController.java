package com.diplom.controllers;

import com.diplom.entity.dto.UserDto2;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diplom.entity.User;
import com.diplom.services.MapperService;
import com.diplom.services.UserServiceImpl;

@CrossOrigin(origins = { "http://localhost:8080", "http://localhost:3000" })
@RestController
@RequestMapping(value = "/users")
public class UserController extends AbstractController<User> {

	@Autowired
	UserServiceImpl userService;

	@Autowired
	ModelMapper mapper;

	@Override
	@PostMapping
	public String add(@RequestBody User user) {
		User userFromDB = userService.findByName(user.getName());
		if(userFromDB == null) {
			userService.add(user);
			return "completed";
		} else {
			return "this user exist";
		}
	}

	@GetMapping(value = "/{name}")
	public UserDto2 getUserByName(@PathVariable("name") String name) {
		return new MapperService<User, UserDto2>(User.class, UserDto2.class).toDto(userService.findByName(name));
	}
	
	
}

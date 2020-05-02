package com.diplom.controllers;

import com.diplom.entity.dto.FilmDto;
import com.diplom.entity.dto.UserDto;
import com.diplom.entity.dto.userDataDto.UserLikedFilmDto;
import com.diplom.entity.dto.userDataDto.UserWatchFilm;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.diplom.entity.User;
import com.diplom.services.MapperService;
import com.diplom.services.UserServiceImpl;

@CrossOrigin(origins = { "http://localhost:8080", "http://localhost:3000" },methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RestController
@RequestMapping(value = "/users")
public class UserController {

	@Autowired
	UserServiceImpl userService;

	@Autowired
	ModelMapper mapper;

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

	@GetMapping(value = "/watchingFilm/{name}")
	public UserWatchFilm getWatchingFilmByName(@PathVariable("name") String name) {
		return new MapperService<User, UserWatchFilm>(User.class, UserWatchFilm.class).toDto(userService.findByLogin(name));
	}
	
	@GetMapping(value = "/likedFilm/{name}")
	public UserLikedFilmDto getLikedFilmByName(@PathVariable("name") String name) {
		return new MapperService<User, UserLikedFilmDto>(User.class, UserLikedFilmDto.class).toDto(userService.findByLogin(name));
	}
	
	@PutMapping(value = "/like")
	public void like(@RequestBody UserLikedFilmDto user) {
		userService.update(new MapperService<User, UserLikedFilmDto >(User.class, UserLikedFilmDto.class).toEntity(user));
	}
	
	@PutMapping(value = "/watch")
	public void watch(@RequestBody UserWatchFilm user) {
		userService.update(new MapperService<User, UserWatchFilm >(User.class, UserWatchFilm.class).toEntity(user));
	}
	
	
	private List<UserDto> mapToDto() {
		return userService.getAll()
				.stream()
				.map(value -> new MapperService<User, UserDto>(User.class, UserDto.class).toDto(value))
				.collect(Collectors.toList());
	}

	private List<UserDto> sortedUsersByName(List<UserDto> dtoList) {
		dtoList = dtoList
				.stream()
				.sorted(Comparator.comparing(UserDto::getName))
				.collect(Collectors.toList());
		return dtoList;
	}
	
	@GetMapping
	public List<UserDto> getAll(){
		return sortedUsersByName(mapToDto());
	}
	
}

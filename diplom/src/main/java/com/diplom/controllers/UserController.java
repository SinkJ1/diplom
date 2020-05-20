package com.diplom.controllers;

import com.diplom.entity.dto.UserDto;
import org.springframework.transaction.annotation.Transactional;
import com.diplom.entity.dto.UserDto2;
import com.diplom.entity.dto.simpleUser.RegistrationUserDto;
import com.diplom.entity.dto.simpleUser.UserAccountDto;
import com.diplom.entity.dto.simpleUser.UserExpectedFilmDto;
import com.diplom.entity.dto.simpleUser.UserLickedFilm;
import com.diplom.entity.dto.simpleUser.UserWatchingFilmDto;
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

@CrossOrigin(origins = { "http://localhost:8080", "http://localhost:3000" }, methods = { RequestMethod.GET,
		RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
@RestController
@RequestMapping(value = "/users")
public class UserController {

	@Autowired
	UserServiceImpl userService;

	@PostMapping(value = "/registration")
	public String registration(@RequestBody RegistrationUserDto user) {
		if (userService.findByLogin(user.getLogin()) != null) {
			return "user exist";
		} else {
			userService.add(
					new MapperService<User, RegistrationUserDto>(User.class, RegistrationUserDto.class).toEntity(user));
			return "complete";
		}
	}

	@GetMapping(value = "/login/{login}")
	public UserDto getUserByLogin(@PathVariable("login") String login) {
		return new MapperService<User, UserDto>(User.class, UserDto.class).toDto(userService.findByLogin(login));
	}

	@GetMapping(value = "/account/{login}")
	public UserAccountDto getUserAccountInfo(@PathVariable("login") String login) {
		return new MapperService<User, UserAccountDto>(User.class, UserAccountDto.class)
				.toDto(userService.findByLogin(login));
	}

	@GetMapping(value = "/watching/{login}")
	public UserWatchingFilmDto getUserWatchingFilms(@PathVariable("login") String login) {
		return new MapperService<User, UserWatchingFilmDto>(User.class, UserWatchingFilmDto.class)
				.toDto(userService.findByLogin(login));
	}

	@GetMapping(value = "/expected/{login}")
	public UserExpectedFilmDto getUserExpectedFilms(@PathVariable("login") String login) {
		return new MapperService<User, UserExpectedFilmDto>(User.class, UserExpectedFilmDto.class)
				.toDto(userService.findByLogin(login));
	}

	@GetMapping(value = "/licked/{login}")
	public UserLickedFilm getUserLickedFilms(@PathVariable("login") String login) {
		return new MapperService<User, UserLickedFilm>(User.class, UserLickedFilm.class)
				.toDto(userService.findByLogin(login));
	}

	@Transactional
	@PutMapping(value = "/expected")
	public void expected(@RequestBody UserExpectedFilmDto user) {
		userService.userExpectedFilmUpdate(
				new MapperService<User, UserExpectedFilmDto>(User.class, UserExpectedFilmDto.class).toEntity(user));
	}

	@Transactional
	@PutMapping(value = "/watch")
	public void watch(@RequestBody UserWatchingFilmDto user) {
		userService.userWatchFilmUpdate(
				new MapperService<User, UserWatchingFilmDto>(User.class, UserWatchingFilmDto.class).toEntity(user));
	}

	@Transactional
	@PutMapping(value = "/like")
	public void like(@RequestBody UserLickedFilm user) {
		userService.userLikeFilmUpdate(
				new MapperService<User, UserLickedFilm>(User.class, UserLickedFilm.class).toEntity(user));
	}

	@GetMapping(value = "/{name}")
	public UserDto2 getUserByName(@PathVariable("name") String name) {
		return new MapperService<User, UserDto2>(User.class, UserDto2.class).toDto(userService.findByName(name));
	}

	private List<UserDto> mapToDto() {
		return userService.getAll().stream()
				.map(value -> new MapperService<User, UserDto>(User.class, UserDto.class).toDto(value))
				.collect(Collectors.toList());
	}

	private List<UserDto> sortedUsersByName(List<UserDto> dtoList) {
		dtoList = dtoList.stream().sorted(Comparator.comparing(UserDto::getName)).collect(Collectors.toList());
		return dtoList;
	}

	@GetMapping
	public List<UserDto> getAll() {
		return sortedUsersByName(mapToDto());
	}

}

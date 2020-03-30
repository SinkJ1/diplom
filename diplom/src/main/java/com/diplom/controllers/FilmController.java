package com.diplom.controllers;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diplom.entity.Film;
import com.diplom.entity.dto.FilmDto;
import com.diplom.services.FilmServiceImpl;

@CrossOrigin//(origins = { "http://localhost:8080", "http://localhost:3000" })
@RestController
@RequestMapping(value = "/films")
public class FilmController extends AbstractController<Film> {
	
	@Autowired
	FilmServiceImpl userService;

	@Autowired
	ModelMapper mapper;
	
	@GetMapping(value = "/{name}")
	public FilmDto getUserByName(@PathVariable("name") String name) {
		return userService.findByName(name);
	}
	
	@GetMapping(value = "/all")
	public List<FilmDto> getAllDto() {
		return userService.getAllDto();
	}

}

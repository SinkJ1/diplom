package com.diplom.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diplom.entity.dto.GenreDto;
import com.diplom.entity.dto.GenreDtoFilms;
import com.diplom.services.GenreServiceImpl;

@CrossOrigin(origins = { "http://localhost:8080", "http://localhost:3000" })
@RestController
@RequestMapping(value = "/genres")
public class GenreController {
	
	@Autowired
	GenreServiceImpl genreService;

	@GetMapping
	public List<GenreDto> getAll() {
		return genreService.getAllDto();
	}
	
	@GetMapping(value = "/{name}")
	public GenreDtoFilms findFilmsByGenre(@PathVariable("name") String name) {
		return genreService.findFilmsByGenre(name);
	}
}

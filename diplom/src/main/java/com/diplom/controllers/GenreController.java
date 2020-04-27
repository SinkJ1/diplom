package com.diplom.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.diplom.entity.Genre;
import com.diplom.entity.dto.GenreDto;
import com.diplom.entity.dto.GenreDtoFilms;
import com.diplom.services.GenreServiceImpl;
import com.diplom.services.MapperService;

@CrossOrigin( methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
		RequestMethod.PUT })
@RestController
@RequestMapping(value = "/genres")
public class GenreController extends AbstractController<Genre>{
	
	@Autowired
	GenreServiceImpl genreService;

	@GetMapping
	public List<GenreDto> getAllDto() {
		return genreService.getAllDto();
	}
	
	@PutMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseStatus(code = HttpStatus.OK)
	public void update(@RequestBody GenreDto film) {
		genreService.update(new MapperService<Genre, GenreDto>(Genre.class, GenreDto.class).toEntity(film));
	}
	
	@DeleteMapping(value = "/delete", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseStatus(code = HttpStatus.OK)
	public void delete(@RequestBody GenreDto film) {
		genreService.delete(new MapperService<Genre, GenreDto>(Genre.class, GenreDto.class).toEntity(film));
	}
	
	@GetMapping(value = "/{name}")
	public GenreDtoFilms findFilmsByGenre(@PathVariable("name") String name) {
		return genreService.findFilmsByGenre(name);
	}
}

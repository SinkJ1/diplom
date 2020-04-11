package com.diplom.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.diplom.entity.Film;
import com.diplom.entity.dto.ActorDto;
import com.diplom.entity.dto.ActorDtoFilm;
import com.diplom.entity.dto.FilmDto;
import com.diplom.services.FilmServiceImpl;

@CrossOrigin // (origins = { "http://localhost:8080", "http://localhost:3000" })
@RestController
@RequestMapping(value = "/films")
public class FilmController extends AbstractController<Film> {

	@Autowired
	FilmServiceImpl filmService;

	@GetMapping(value = "/{name}")
	public FilmDto getUserByName(@PathVariable("name") String name) {
		return filmService.findByName(name);
	}

	@GetMapping(value = "/bestFilms/{topValue}")
	public List<FilmDto> getTopFilms(@PathVariable("topValue") int topValue) {
		return filmService.getTopFilms(topValue);
	}
	
	@GetMapping(value = "/allYears")
	public List<Date> getAllYearsFilms() {
		return filmService.getAll().stream().map(year -> year.getFilmReleaseDate()).collect(Collectors.toList());
	}
	
	@GetMapping(value = "/filmByParametr")
	public List<FilmDto> getFilmByParametr(EntryModelParamsFilmByParametr parametrs){
		List<EntryModelParamsFilmByParametr> list = new ArrayList<EntryModelParamsFilmByParametr>();
		
		return filmService.getFilmsByParametr(parametrs);
	}

	@GetMapping(value = "/test/{date}")	public Date getAllDto(@PathVariable("date") Date date) throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd");
		
		return filmService.findByName("Игра Престолов").getFilmReleaseDate();
//		return date.before(sdf.parse(gg));
	}
	
	@GetMapping(value = "/test")
	public Date getAllDtoq() throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd");
		return filmService.findByName("Игра Престолов").getFilmReleaseDate();
//		return date.before(sdf.parse(gg));
	}
	
	@GetMapping(value = "/year/{year}")
	public List<FilmDto> getFilmsByYear(@PathVariable("year") int year) {
		return filmService.findFilmByYear(year);
	}
	
	@GetMapping(value = "/all")
	public List<FilmDto> getAllDto() {
		return filmService.getAllDto();
	}

}

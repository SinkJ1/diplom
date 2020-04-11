package com.diplom.services;

import java.util.List;
import java.util.Map;

import com.diplom.controllers.EntryModelParamsFilmByParametr;
import com.diplom.entity.Film;
import com.diplom.entity.dto.ActorDtoFilm;
import com.diplom.entity.dto.FilmDto;

public interface FilmService extends GenericService<Film>{

	FilmDto findByName(String name); 
	
	List<FilmDto> getTopFilms(int topValue);
	
	List<FilmDto> getFilmsByParametr(EntryModelParamsFilmByParametr parametrs);
	
	List<FilmDto> getAllDto();
	
	List<FilmDto> findFilmByYear(int year);
	
}

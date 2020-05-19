package com.diplom.services;

import java.util.Date;
import java.util.List;

import com.diplom.controllers.EntryModelParamsFilmByParametr;
import com.diplom.entity.Film;
import com.diplom.entity.dto.ActorDto;
import com.diplom.entity.dto.FilmDto;
import com.diplom.entity.dto.common.FilmImgDto;

public interface FilmService extends GenericService<Film>{

	FilmDto findByName(String name); 
	
	List<FilmDto> getTopFilms(int topValue);
	
	List<FilmDto> getFilmsByParametr(EntryModelParamsFilmByParametr parametrs);
	
	List<FilmDto> getAllDto(List<Film> filmList);
	
	List<FilmDto> findFilmByYear(int year);
	
	List<FilmDto> getCommingSonFilms(Date date);
	
	List<FilmImgDto>  getLastXFilms(int xValue);
	
	List<FilmDto> findByShortName(String name);
	
}

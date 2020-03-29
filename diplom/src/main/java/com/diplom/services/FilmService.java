package com.diplom.services;

import java.util.List;

import com.diplom.entity.Film;
import com.diplom.entity.dto.FilmDto;

public interface FilmService extends GenericService<Film>{

	Film findByName(String name); 
	
	List<FilmDto> getAllDto();
	
}

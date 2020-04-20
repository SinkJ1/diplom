package com.diplom.services;

import com.diplom.entity.Genre;
import com.diplom.entity.dto.GenreDtoFilms;

public interface GenreService extends GenericService<Genre>{

	GenreDtoFilms findFilmsByGenre(String name);
	
}

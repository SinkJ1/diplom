package com.diplom.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.diplom.entity.Genre;
import com.diplom.entity.dto.GenreDto;
import com.diplom.entity.dto.GenreDtoFilms;

@Service
public class GenreServiceImpl extends AbstractGenericService<Genre> implements GenreService {

	public List<GenreDto> getAllDto() {
		return dao.getAll(entityManager).stream()
				.map(value -> new MapperService<Genre, GenreDto>(Genre.class, GenreDto.class).toDto(value))
				.collect(Collectors.toList());
	}

	@Override
	public GenreDtoFilms findFilmsByGenre(String name) {
		return new MapperService<Genre, GenreDtoFilms>(Genre.class, GenreDtoFilms.class)
				.toDto(dao.findByName(entityManager, name));
	}

}

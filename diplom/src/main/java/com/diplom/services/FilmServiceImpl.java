package com.diplom.services;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diplom.controllers.EntryModelParamsFilmByParametr;
import com.diplom.dao.FilmDao;
import com.diplom.entity.Film;
import com.diplom.entity.dto.FilmDto;
import com.diplom.entity.dto.FilmImgDto;

@Service
public class FilmServiceImpl extends AbstractGenericService<Film> implements FilmService {

	@Autowired
	private FilmDao dao;

	@Override
	public void add(Film object) {
		object.getActors().stream().forEach(value -> value.setFilm(object));
		object.getGenres().stream().forEach(value -> value.setFilm(object));
		object.getCountries().stream().forEach(value -> value.setFilm(object));
		dao.add(entityManager, object);
	}

	@Override
	public FilmDto findByName(String name) {
		return new MapperService<Film, FilmDto>(Film.class, FilmDto.class).toDto(dao.findByName(entityManager, name));
	}

	@Transactional
	@Override
	public List<FilmDto> getAllDto(List<Film> flimList) {
		return flimList.stream().map(value -> new MapperService<Film, FilmDto>(Film.class, FilmDto.class).toDto(value))
				.collect(Collectors.toList());
	}

	@Override
	public List<FilmDto> getTopFilms(int topValue) {
		return getAllDto(dao.getTopFilms(entityManager, topValue));
	}

	@Override
	public List<FilmDto> getFilmsByParametr(EntryModelParamsFilmByParametr parametrs) {
		return getAllDto(dao.getFilmsByParam(entityManager, createParams(parametrs).toString()));
	}

	@Override
	public List<FilmDto> findFilmByYear(int year) {
		return getAllDto(dao.getFilmByYear(entityManager, year));
	}

	private StringBuilder createParams(EntryModelParamsFilmByParametr parametrs) {
		StringBuilder where = new StringBuilder();
		if (parametrs.getActor() != null) {
			where.append(" a.user.name=" + "'" + parametrs.getActor() + "'");
		}
		if (parametrs.getCountry() != null) {
			if (where.length() > 0) {
				where.append(" and fc.country.name=" + "'" + parametrs.getCountry() + "'");
			} else {
				where.append(" fc.country.name=" + "'" + parametrs.getCountry() + "'");
			}
		}
		if (parametrs.getProducer() != null) {
			if (where.length() > 0) {
				where.append(" and f.userId.name=" + "'" + parametrs.getProducer() + "'");
			} else {
				where.append(" f.userId.name=" + "'" + parametrs.getProducer() + "'");
			}
		}
		if (parametrs.getYear() != null) {
			if (where.length() > 0) {
				where.append(" and TO_CHAR(f.filmReleaseDate,'YYYY')=" + "'" + parametrs.getYear() + "'");
			} else {
				where.append(" TO_CHAR(f.filmReleaseDate,'YYYY')=" + "'" + parametrs.getYear() + "'");
			}
		}

		return where;
	}

	@Override
	public List<FilmImgDto> getLastXFilms(int xValue) {
		return dao.getLastXFilms(entityManager, xValue).stream()
				.map(value -> new MapperService<Film, FilmImgDto>(Film.class, FilmImgDto.class).toDto(value))
				.collect(Collectors.toList());
	}

	@Override
	public List<FilmDto> getCommingSonFilms(Date date) {
		return getAllDto(dao.getCommingsFilms(entityManager, date));
	}

	@Override
	public List<FilmDto> findByShortName(String name) {
		return getAllDto(dao.findByShortName(entityManager, name));
	}

}

package com.diplom.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diplom.controllers.EntryModelParamsFilmByParametr;
import com.diplom.dao.FilmDao;
import com.diplom.entity.Actor;
import com.diplom.entity.Country;
import com.diplom.entity.Film;
import com.diplom.entity.FilmCountry;
import com.diplom.entity.User;
import com.diplom.entity.dto.ActorDto;
import com.diplom.entity.dto.ActorDtoFilm;
import com.diplom.entity.dto.CountryDtoFilms;
import com.diplom.entity.dto.FilmDto;
import com.diplom.entity.dto.ProducerDto;
import com.diplom.entity.dto.UserDto2;

@Service
public class FilmServiceImpl extends AbstractGenericService<Film> implements FilmService {

	@Autowired
	private FilmDao dao;

	@Override
	public FilmDto findByName(String name) {
		return new MapperService<Film, FilmDto>(Film.class, FilmDto.class).toDto(dao.findByName(entityManager, name));
	}

	@Transactional
	@Override
	public List<FilmDto> getAllDto() {

		List<FilmDto> dtoList = new ArrayList<FilmDto>();

		for (Film filmList : dao.getAll(entityManager)) {
			dtoList.add(new MapperService<Film, FilmDto>(Film.class, FilmDto.class).toDto(filmList));
		}

		return dtoList;
	}

	@Override
	public List<FilmDto> getTopFilms(int topValue) {
		List<FilmDto> dtoList = new ArrayList<FilmDto>();

		for (Film filmList : dao.getTopFilms(entityManager, topValue)) {
			dtoList.add(new MapperService<Film, FilmDto>(Film.class, FilmDto.class).toDto(filmList));
		}
		return dtoList;
	}

	@Override
	public List<FilmDto> getFilmsByParametr(EntryModelParamsFilmByParametr parametrs) {
		
		List<FilmDto> dtoList = new ArrayList<FilmDto>();

		for (Film filmList : dao.getFilmsByParam(entityManager,createParams(parametrs).toString())) {
			dtoList.add(new MapperService<Film, FilmDto>(Film.class, FilmDto.class).toDto(filmList));
		}
		
		return dtoList;
	}

	@Override
	public List<FilmDto> findFilmByYear(int year) {
		List<FilmDto> dtoList = new ArrayList<FilmDto>();

		for (Film filmList : dao.getFilmByYear(entityManager, year)) {
			dtoList.add(new MapperService<Film, FilmDto>(Film.class, FilmDto.class).toDto(filmList));
		}
		return dtoList;
	}
	
	
	private StringBuilder createParams(EntryModelParamsFilmByParametr parametrs) {
		StringBuilder where = new StringBuilder();
		if(parametrs.getActor() != null) {
			where.append(" a.user.name=" + "'" + parametrs.getActor() + "'");
		}
		if(parametrs.getCountry() != null) {
			if(where.length() > 0) {
				where.append(" and fc.country.name=" + "'" + parametrs.getCountry() + "'");
			} else {
				where.append(" fc.country.name=" + "'" + parametrs.getCountry() + "'");
			}
		}
		if(parametrs.getProducer() != null) {
			if(where.length() > 0) {
				where.append(" and f.userId.name=" + "'" + parametrs.getProducer() + "'");
			} else {
				where.append(" f.userId.name=" + "'" + parametrs.getProducer() + "'");
			}
		}
		if(parametrs.getYear() != null) {
			if(where.length() > 0) {
				where.append(" and TO_CHAR(f.filmReleaseDate,'YYYY')=" + "'" + parametrs.getYear() + "'");
			} else {
				where.append(" TO_CHAR(f.filmReleaseDate,'YYYY')=" + "'" + parametrs.getYear() + "'");
			}
		}
		
		return where;
	}

}

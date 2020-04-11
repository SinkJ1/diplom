package com.diplom.dao;

import java.util.List;

import javax.persistence.EntityManager;

import com.diplom.entity.Film;
import com.diplom.entity.dto.FilmDto;

public interface FilmDao extends Dao<Film>{
	
	Film findByName(EntityManager em, String name);
	
	List<Film> getFilmByYear(EntityManager em, int year);
	
	List<Film> getTopFilms(EntityManager em, int topValue);
	
	List<Film> getFilmsByParam(EntityManager em, String params);
}

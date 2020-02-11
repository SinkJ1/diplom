package com.diplom.dao;

import org.springframework.stereotype.Repository;

import com.diplom.entity.Film;


@Repository
public class FilmDAOImpl extends GenericDao<Film> implements Dao<Film> {

	@Override
	protected Class<Film> getTClass() {
		return Film.class;
	}

}

package com.diplom.dao;

import org.springframework.stereotype.Repository;

import com.diplom.entity.Genre;

@Repository
public class GenreDaoImpl extends GenericDao<Genre> implements GenreDao{

	@Override
	Class<Genre> getTClass() {
		return Genre.class;
	}

	@Override
	String nameColumn() {
		return "genre_name";
	}

}

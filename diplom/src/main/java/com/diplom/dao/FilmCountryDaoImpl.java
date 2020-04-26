package com.diplom.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.diplom.entity.Film;
import com.diplom.entity.FilmCountry;

@Repository
public class FilmCountryDaoImpl extends GenericDao<FilmCountry> implements IntermediateEntityDao<FilmCountry,Film>{

	@Override
	public List<FilmCountry> getByEntity(EntityManager em, Film entity) {
		return em.createQuery("from " + FilmCountry.class.getName() + " where film.id = " + entity.getId() + "", FilmCountry.class).getResultList();
	}

	@Override
	Class<FilmCountry> getTClass() {
		return FilmCountry.class;
	}

	@Override
	String nameColumn() {
		// TODO Auto-generated method stub
		return null;
	}

}

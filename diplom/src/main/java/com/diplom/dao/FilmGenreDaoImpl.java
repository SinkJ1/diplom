package com.diplom.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.diplom.entity.Film;
import com.diplom.entity.FilmsGenre;

@Repository
public class FilmGenreDaoImpl extends GenericDao<FilmsGenre> implements IntermediateEntityDao<FilmsGenre, Film> {

	@Override
	public List<FilmsGenre> getByEntity(EntityManager em, Film entity) {
		return em.createQuery("from " + FilmsGenre.class.getName() + " where film.id = " + entity.getId() + "",
				FilmsGenre.class).getResultList();
	}

	@Override
	Class<FilmsGenre> getTClass() {
		return FilmsGenre.class;
	}

	@Override
	String nameColumn() {
		// TODO Auto-generated method stub
		return null;
	}

}

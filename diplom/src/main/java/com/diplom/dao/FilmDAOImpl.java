package com.diplom.dao;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.diplom.entity.Film;


@Repository
public class FilmDAOImpl extends GenericDao<Film> implements FilmDao {

	@Override
	protected Class<Film> getTClass() {
		return Film.class;
	}

	@Override
	public Film findByName(EntityManager em, String name) {
		return em.createQuery("from " + Film.class.getName() + " where film_name =" + "'" + name + "'", Film.class).getSingleResult();
	}
	

}

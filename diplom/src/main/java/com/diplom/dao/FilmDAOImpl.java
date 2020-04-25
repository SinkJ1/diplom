package com.diplom.dao;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.diplom.entity.Actor;
import com.diplom.entity.Film;
import com.diplom.entity.FilmCountry;


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
	
	public List<Film> findByShortName(EntityManager em, String name) {
		return em.createQuery("from " + Film.class.getName() + " where film_name like " + "'%" + name + "%'", Film.class).getResultList();
	}

	@Override
	String nameColumn() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Film> getTopFilms(EntityManager em, int topValue) {
		TypedQuery<Film> typedQuery = em.createQuery("from " + getTClass().getName() + " ORDER BY film_raiting DESC", getTClass());
		typedQuery.setFirstResult(0);
		typedQuery.setMaxResults(topValue);
		return typedQuery.getResultList();
	}

	@Override
	public List<Film> getFilmByYear(EntityManager em, int year) {
		return em.createQuery("from " + Film.class.getName() + " where TO_CHAR(film_release_date,'YYYY')=" + "'" + year + "'", Film.class).getResultList();
	}

	@Override
	public List<Film> getFilmsByParam(EntityManager em, String params) {
		return em.createQuery("select  DISTINCT (f) from " + Actor.class.getName() + " a left join a.film f, " + FilmCountry.class.getName() + " fc where " + params + "", Film.class).getResultList();
	}

	@Override
	public List<Film> getLastXFilms(EntityManager em, int xValue) {
		TypedQuery<Film> typedQuery = em.createQuery("from " + getTClass().getName() + " ORDER BY film_release_date DESC", getTClass());
		typedQuery.setFirstResult(0);
		typedQuery.setMaxResults(xValue);
		return typedQuery.getResultList();
	}

	@Override
	public List<Film> getCommingsFilms(EntityManager em, Date date) {
		return em.createQuery("from " + Film.class.getName() + " where film_release_date > " + "'" + date + "'", Film.class).getResultList();
	}

}

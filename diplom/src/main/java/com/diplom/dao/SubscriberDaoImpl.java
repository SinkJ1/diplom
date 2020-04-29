package com.diplom.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.diplom.entity.Film;
import com.diplom.entity.Subscriber;

@Repository
public class SubscriberDaoImpl extends GenericDao<Subscriber> implements SubscriberDao{

	@Override
	Class<Subscriber> getTClass() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	String nameColumn() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Subscriber> getFilmsByEmail(EntityManager em, String email) {
		return em.createQuery("from " + Subscriber.class.getName() + " where email = " + "'" + email + "'", Subscriber.class).getResultList();
	}

	@Override
	public List<Subscriber> getSubsByFilm(EntityManager em, Film film) {
		return em.createQuery("from " + Subscriber.class.getName() + " where film = " + "'" + film.getId() + "'", Subscriber.class).getResultList();
	}



}
